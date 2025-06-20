<script setup>
import { ref } from 'vue'
//import Header from './components/Header.vue'
import Contenedor from './components/Contenedor.vue'

const nombreEmpresa = ref('DataStorm')

</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <Contenedor></Contenedor>
  </div>
</template>

<style scoped>

</style>
