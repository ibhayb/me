<script setup lang="ts">
const props = defineProps({
  buttonText: String,
  ahref: String
})
</script>

<template>
  <a :href="ahref">
    <button
      class="hidden md:block lg:block border border-transparent transform hover:scale-105 ease-in-out transition duration-200 hover:border-slate-200 bg-indigo-600 text-gray-800 font-bold mb-8 py-2 px-4 rounded inline-flex items-center mt-10 lg:mb-20"
    >
      <span> {{ buttonText }}</span>
    </button>
  </a>
</template>
