<script setup>

import { ref } from 'vue';

const nombreEmpresa = ref('Operación DataStorm');

</script>

<template>
    <header class="flex flex-col items-center justify-center w-full top-0 left-0 fixed p-4 mb-4">
        <h1 class="text-3xl text-white font-bold">{{ nombreEmpresa }}</h1>
        <p class="text-lg text-gray-400 font-bold">Gestiona todas tus tareas como agente de CyberPulse Labs</p>

    </header>
</template>

<style>
@import "tailwindcss";
</style>