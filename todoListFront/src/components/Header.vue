<script setup>

import { ref } from 'vue';

const nombreEmpresa = ref('TodoApp');

</script>

<template>
    <header class="flex flex-col items-center justify-center bg-gray-900 w-full top-0 left-0 fixed p-4">
        <h1 class="text-3xl text-white font-bold">{{ nombreEmpresa }}</h1>
        <p class="text-lg text-gray-400 font-bold">Ten acceso a todas tus tareas del día desde nuestra aplicación</p>
    </header>
</template>

<style>
@import "tailwindcss";
</style>