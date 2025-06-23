<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Contenedor from '../components/Contenedor.vue'

const route = useRoute()
const nombreUsuario = ref(route.query.nombre || 'Agente')
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Contenedor :nombre="nombreUsuario"></Contenedor>
  </div>
</template>

<style scoped>

</style>
