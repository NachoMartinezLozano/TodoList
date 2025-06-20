<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import Contenedor from './components/Contenedor.vue'
const nombreEmpresa = ref('DataStorm')
</script>

<template>
<body class="flex flex-col justify-center items-center">
  <Header></Header>
  <!--
  <div class="flex flex-row w-full">
    <section id="presentacion" class="flex flex-col">
      <h2>Bienvenido a DataStorm!</h2>
      <p>Desde CyberPulse Labs estamos muy concienciados con el correcto uso del tiempo.</p>
      <p>Es por ello que hemos creado {{ nombreEmpresa }}, mediante la cual se podrá llevar a cabo un correcto control del desarrollo de las tareas.</p>
      En algún momento aquí pondré los botones para activar los distintos filtros de los todos
    </section>
  </div>
  -->
  <Contenedor class="mx-auto w-full"></Contenedor>
</body>
</template>

<style scoped>

@import "tailwindcss";

</style>
