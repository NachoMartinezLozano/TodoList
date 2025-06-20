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

    <div class="flex flex-row items-center justify-center p-4">

        <div class="flex flex-col justify-center items-center mx-auto">
            <h2 class="text-lg font-bold">Añade tareas a la lista</h2>
            <form @submit.prevent="addTodo">
                <input v-model="newTodo" required placeholder="Añade una nueva tarea">
                <button class="border border-gray-400 rounded px-2 py-1">Añadir tarea</button>
                <button class="border border-gray-400 rounded px-2 py-1" @click="hideCompleted = !hideCompleted">
                    {{  hideCompleted ? 'Mostrar todas' : 'Mostrar pendientes' }}
                </button>
            </form>
        </div>

        <div class="flex flex-col justify-center items-center mx-auto">
            <h2 class="text-lg font-bold">Lista de tareas</h2>
            <ul>
                <li v-for="todo in filteredTodos" :key="todo.id" class="flex items-center">
                    <input type="checkbox" v-model="todo.completed">
                    <span :class="{ 'line-through': todo.completed }">{{ todo.text }}</span>
                    <button @click="removeTodo(todo.id)">Eliminar</button>
                </li>
            </ul>
        </div>

    </div>

</template>

<style>


    @import "tailwindcss";
</style>