<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Contenedor from './components/Contenedor.vue'

const nombreEmpresa = ref('DataStorm')
const nombreUsuario = ref('')
</script>

<template>
<body class="flex flex-col justify-center items-center">
  <Header></Header>

  <Contenedor class="mx-auto w-full">
    <ListaTodo></ListaTodo>
  </Contenedor>
</body>
</template>

<style scoped>

@import "tailwindcss";

</style>
