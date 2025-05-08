<template>
  <!-- card1 -->
  <a :href="link" target="_blank" rel="noopener noreferrer" class="group m-16 block">
    <div
      class="relative z-10 flex cursor-pointer overflow-hidden rounded-lg border border-white hover:border-indigo-900 p-[4px]"
    >
      <!-- Animated border layer, visible only on hover -->
      <div
        class="absolute inset-0 h-full w-full rounded-full bg-[conic-gradient(#3F51B5_20deg,transparent_120deg)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-rotate pointer-events-none"
      ></div>
      <div class="z-20 w-full rounded-[0.10rem] bg-black p-16 h-[300px]">
        <h3 class="mb-8 text-[1.5rem]">{{ title }}</h3>
        <p class="mb-12 text-[1rem] text-[#555]">{{ description }}</p>
        <p class="hover:underline" v-if="link">View project</p>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String,
  description: String,
  link: String
})
</script>
