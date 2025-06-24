<script setup>

import { ref, computed } from 'vue'

    let id = 0
    const newTodo = ref('')
    const todos = ref([])
    const hideCompleted = ref(false)

    const filteredTodos = computed(() => {
        return hideCompleted.value ? todos.value.filter(todo => !todo.completed) : todos.value
    })

    function addTodo() {
        const currentDate = new Date().toISOString().split('T')[0]
        todos.value.push({ id: id++, text: newTodo.value, completed: false, dueDate: currentDate})
    }

    function removeTodo(todoId) {
        todos.value = todos.value.filter(todo => todo.id !== todoId)
    }

</script>

<template>

   <div class="flex flex-col gap-6 p-6">
    <!-- Formulario -->
    <div class="bg-gray-800 p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-bold text-blue-400 mb-4 text-center">Añade tareas a la lista</h2>
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
            <input type="checkbox" v-model="todo.completed" class="w-5 h-5 accent-blue-600" />
            <span :class="{ 'line-through text-gray-400': todo.completed }">{{ todo.text }}</span>
          </div>
          <button
            @click="removeTodo(todo.id)"
            class="text-red-400 hover:text-red-600 transition"
          >
            Eliminar
          </button>
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