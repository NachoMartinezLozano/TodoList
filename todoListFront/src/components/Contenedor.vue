<script setup>

import { ref } from 'vue'
import ListaTodo from './ListaTodo.vue'
import { useRouter } from 'vue-router'

const nombreEmpresa = ref('DataStorm')
defineProps(['nombre'])
const router = useRouter()

</script>

<template>
<div class="min-h-screen bg-gray-900 flex flex-col">
    <!-- Header -->
    <header class="w-full bg-gray-800 shadow-lg p-6 flex flex-col relative">
      <div class="flex flex-row items-center justify-between">
        <h1 class="text-4xl font-bold text-blue-400">¡Hola, {{ nombre || 'Agente'}}!</h1>
        <button class="btn" @click="router.push({ path: '/' })">Atrás</button>
      </div>
      
      <p class="text-lg text-gray-300">Gestiona tus tareas como agente de CyberPulse Labs</p>

    </header>

    <!-- Contenido principal -->
    <main class="flex-grow flex justify-center p-6">
      <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Sección de bienvenida -->
        <section class="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-blue-400 mb-2">Bienvenido a {{ nombreEmpresa }}!</h2>
          <p class="text-lg text-gray-300">Gestiona todas tus tareas como agente de CyberPulse Labs y alcanza tus objetivos.</p>
        </section>

        <!-- Lista de tareas -->
        <section>
          <ListaTodo />
        </section>
      </div>
    </main>
  </div>

</template>

<style>

</style>