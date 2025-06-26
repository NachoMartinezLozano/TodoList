<script setup>

import { ref, computed, onMounted } from 'vue'

    const props = defineProps(['nombre'])
    const apiURL = 'https://localhost:7151/api/TodoItems'
    let id = 0
    const newTodo = ref('')
    const todos = ref([])
    const hideCompleted = ref(false)
    const editingTodoId = ref(null)
    const editedTodoName = ref('')

    const filteredTodos = computed(() => {
        return hideCompleted.value ? todos.value.filter(todo => !todo.isComplete) : todos.value
    })

    onMounted(() => {
      fetchTodos()
    })

    async function fetchTodos(){
      console.log('Enviando solicitud GET a:', apiURL)
      try{
        // Cambio especial para filtar las tareas por usuario
        const user = props.nombre || 'Agente'
        const url = `${apiURL}?user=${encodeURIComponent(user)}`;
        const response = await fetch(url)
        console.log('Respuesta recibida:', response.status, response.statusText);
        if(!response.ok) throw new Error('Error al obtener las tareas')
        todos.value = await response.json()
        console.log('Tareas obtenidas:', todos.value)
      } catch (error){
        console.error('Error fetching todos:', error)
        todos.value = [] // Reset todos in case of error
      }
    }

    async function addTodo(){
      console.log('Función addTodo ejecutada, newTodo:', newTodo.value);
      if(!newTodo.value.trim()){
        console.log('No se añadió tarea: el input está vacío');
        return; // No empty todos allowed
      } 
      const item = {
        name: newTodo.value.trim(),
        user: props.nombre || 'Agente',
        isComplete: false
      }

      try {
        console.log('Enviando solicitud POST a:', apiURL)
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
        })
        console.log('Respuesta recibida:', response.status, response.statusText);
        if(!response.ok) throw new Error('Error al añadir la tarea')
        newTodo.value = '' // Clear input after adding
        await fetchTodos() // Refresh the todo list
      } catch(error){
        console.error('Error adding todo:', error)
      }
    }

    async function removeTodo(todoId){
      try{
        console.log('Enviando solicitud DELETE a:', `${apiURL}/${todoId}`)
        const response = await fetch(`${apiURL}/${todoId}`, {
          method: 'DELETE'
        })

        if(!response.ok) throw new Error('Error al eliminar la tarea')
        await fetchTodos() // Refresh the todo list after deletion
      }catch(error){
        console.error('Error removing todo:', error)
      }
    }

    async function updateTodo(todo){
      const updatedTodo = {
        id: todo.id,
        name: todo.name,
        user: todo.user || props.nombre || 'Agente',
        isComplete: todo.isComplete
      }

      try{
        console.log('Enviando solicitud PUT a:', `${apiURL}/${todo.id}`)
        const response = await fetch(`${apiURL}/${todo.id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedTodo)
        })
        console.log('Respuesta recibida:', response.status, response.statusText);
        if(!response.ok) throw new Error('Error al actualizar la tarea')
        editingTodoId.value = null // Clear editing state
        editedTodoName.value = ''
        await fetchTodos() // Refresh the todo list after update
      } catch(error){
        console.error('Error updating todo:', error)
      }
    }
     // Comenzar edición de una tarea
    function startEditing(todo) {
      editingTodoId.value = todo.id
      editedTodoName.value = todo.name
    }
     // Cancelar edición de una tarea
    function cancelEditing() {
      editingTodoId.value = null
      editedTodoName.value = ''
    }

</script>

<template>

   <div class="flex flex-col gap-6 p-6">
    <!-- Formulario -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-400 mb-4 text-center">Añade tareas a la lista, {{ nombre || 'Agente' }}</h2>
      <form @submit.prevent="addTodo" class="flex flex-col gap-4">
        <input
          class="px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          v-model="newTodo"
          required
          placeholder="Añade una nueva tarea"
        />
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Añadir tarea
        </button>
      </form>
      <button
        class="mt-4 w-full border border-gray-600 text-gray-300 px-4 py-2 mb-2 rounded-lg hover:bg-gray-700 hover:text-white transition"
        @click="hideCompleted = !hideCompleted"
      >
        {{ hideCompleted ? 'Mostrar todas' : 'Mostrar solo pendientes' }}
      </button>
    </div>

    <!-- Lista de tareas -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-400 mb-4 text-center">Lista de tareas</h2>
      <ul class="space-y-3">
        <li
          v-for="todo in filteredTodos"
          :key="todo.id"
          class="flex items-center justify-between bg-gray-700 p-3 rounded-lg shadow-sm"
        >
          <div class="flex items-center gap-3">
            <input type="checkbox" v-model="todo.isComplete" @change="updateTodo(todo)" class="w-5 h-5 accent-blue-600" />
            <span v-if="editingTodoId !== todo.id" :class="{ 'line-through text-gray-400': todo.isComplete }">{{ todo.name }}</span>
            <template v-if="editingTodoId === todo.id">
              <input v-model="editedTodoName" class="px-2 py-1 rounded-lg bg-gray-600 border border-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition" @keyup.enter="updateTodo({...todo, name: editedTodoName })" @keyup.escape="cancelEditing" />
            </template>
          </div>
          <div class="flex gap-2">
            <!-- Botón de guardar cambios todo -->
            <button 
              v-if="editingTodoId === todo.id"
              @click="updateTodo({...todo, name: editedTodoName })"
              class="text-blue-400 hover:text-blue-600 transition"
            >
              Guardar
            </button>
            <!-- Botón cancelar edición todo -->
            <button
              v-if="editingTodoId === todo.id"
              @click="cancelEditing"
              class="text-gray-400 hover:text-gray-600 transition"
            >
              Cancelar
            </button>

            <!-- Botón de editar todo -->
             <button
                v-if="editingTodoId !== todo.id"
                @click="startEditing(todo)"
                class="text-blue-400 hover:text-blue-600 transition"
              >
              Editar
            </button>

            <!-- Botón de eliminar todo -->
            <button
              v-if="editingTodoId !== todo.id"
              @click="removeTodo(todo.id)"
              class="text-red-400 hover:text-red-600 transition"
            >
              Eliminar
            </button>
          </div>
        </li>
        <li v-if="!filteredTodos.length" class="text-gray-400 text-center">
          No hay tareas {{ hideCompleted ? 'pendientes' : '' }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
</style>