<script setup>

const msg = defineProps({
    msg: String
})
import ListaTodo from './ListaTodo.vue'

</script>

<template>

    <div class="flex justify-center">
    <div class="grid grid-cols-2 mx-auto max-w-screen">
        <section id="presentacion" class="flex flex-col p-4 mx-auto rounded shadow-md bg-gray-800">
            <h2 class="text-2xl font-bold mb-2">Bienvenido a DataStorm {{ msg || 'Usuario' }}!</h2>
            <p class="text-lg font-bold m-4">Gestiona todas tus tareas como agente de CyberPulse Labs y consigue tu objetivo.</p>
        </section>
        
        <section>
            <ListaTodo></ListaTodo>
        </section>
        
    </div>
    </div>

</template>

<style>
@import "tailwindcss";
</style>