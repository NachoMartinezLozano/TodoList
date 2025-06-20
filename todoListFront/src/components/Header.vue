<script setup>

import { ref } from 'vue';

const nombreEmpresa = ref('Operación DataStorm')

const emit = defineEmits(['nombreUsuario'])


</script>

<template>
    <header class="flex flex-col items-center justify-center w-full top-0 left-0 fixed p-4 mb-4">
        <h1 class="text-4xl font-bold mb-2">{{ nombreEmpresa }}</h1>
        <p class="text-lg text-gray-300">Gestiona todas tus tareas como agente de CyberPulse Labs</p>
        <input type="text" v-model="nombreUsuario" required placeholder="Introduce tu nombre" class="mt-4 px-4 py-2 rounded border border-gray-500 bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring" /> 
    </header>
</template>

<style>
@import "tailwindcss";
</style>