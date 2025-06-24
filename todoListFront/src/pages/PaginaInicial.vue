<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const msg = ref('')
const router = useRouter()

function handleSubmit() {
  if (msg.value.trim()) {
    router.push({ path: './principal', query: { nombre: msg.value } })
  }
}
</script>

<template>

  <div class="navbar bg-base-100 shadow-sm bg-gray-900 text-blue-400 px-5">
    <div class="flex-1 text-blue-400">
      <a class="btn btn-ghost text-xl">CyberPulse Labs</a>
    </div>
    <div class="flex-none">
      <button class="btn btn-square btn-ghost">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-5 w-5 stroke-current"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
      </button>
    </div>
  </div>

  <div class="min-h-screen bg-gray-900 flex flex-col justify-center items-center w-full mx-auto">
    <div id="Presentacion" class="flex flex-col items-center justify-center w-full mx-auto">
      <h1 class="text-4xl font-bold text-blue-400 py-4">Bienvenido a DataStorm</h1>
      <h2 class="text-2xl font-bold text-blue-400 mb-4 text-center py-4">Por favor, introduzca sus datos</h2>
    </div>

    <form @submit.prevent="handleSubmit">
      <div class="flex flex-col">
        <input
        id="username"
        type="text"
        v-model="msg"
        required
        placeholder="Introduce tu nombre"
        class="mb-4 px-4 py-2 rounded-lg bg-gray-700 text-white border border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <button
        type="submit"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition"
      >
        Continuar
      </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
/* TailwindCSS ya está importado globalmente */
</style>