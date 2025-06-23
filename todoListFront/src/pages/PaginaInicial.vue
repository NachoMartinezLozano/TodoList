<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const msg = ref('')
const router = useRouter()

function handleSubmit() {
  if (msg.value.trim()) {
    router.push({ path: '/dashboard', query: { nombre: msg.value } })
  }
}
</script>

<template>
  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center">
    <div id="Presentacion" class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold text-blue-400">Bienvenido a DataStorm</h1>
      <h2 class="text-2xl font-bold text-blue-400 mb-4 text-center">Por favor, introduzca sus datos</h2>
    </div>

    <form @submit.prevent="handleSubmit" class="flex flex-col items-center">
      <input
        type="text"
        v-model="msg"
        required
        placeholder="Introduce tu nombre"
        class="mt-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        class="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
      >
        Continuar
      </button>
    </form>
  </div>
</template>

<style scoped>
/* TailwindCSS ya está importado globalmente */
</style>