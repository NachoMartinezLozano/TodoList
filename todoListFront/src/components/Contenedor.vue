<script setup>

import ListaTodo from './ListaTodo.vue'

</script>

<template>
<div class="min-h-screen bg-gray-900 flex flex-col">
    <!-- Header -->
    <header class="w-full bg-gray-800 shadow-lg p-6 flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-blue-400">¡Hola, {{ msg || 'Agente' }}!</h1>
      <p class="text-lg text-gray-300 mt-2">Gestiona tus tareas como agente de CyberPulse Labs</p>
      <input
        type="text"
        v-model="msg"
        required
        placeholder="Introduce tu nombre"
        class="mt-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
    </header>

    <!-- Contenido principal -->
    <main class="flex-grow flex justify-center p-6">
      <div class="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Sección de bienvenida -->
        <section class="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 class="text-2xl font-bold text-blue-400 mb-4">Bienvenido a {{ nombreEmpresa }}!</h2>
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