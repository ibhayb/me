<script setup lang="ts">
import Button from './components/Button.vue'
</script>

<template>
  <div
    class="gap-10 font-mono text-white antialiased grid grid-cols-1 items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-4 py-12 animate-fadein"
  >
    <div class="text-3xl lg:text-5xl text-left w-full font-bold">My Technologies 🚀🧑🏼‍💻</div>
    <div class="relative text-center">
      <!-- Tech Icons Div -->
      <div class="grid grid-cols-1 py-12 gap-8 lg:gap-16 text-xl mb-24">
        <div class="">
          <h1 class="mb-6 text-left">Programming Languages</h1>
          <div
            class="flex flex-wrap items-center gap-6 rounded-xl px-6 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"
          >
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/php-%23777BB4.svg?&style=for-the-badge&logo=php&logoColor=white"
              alt="PHP"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Python-3776AB?&style=for-the-badge&logo=python&logoColor=fff"
              alt="Python"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/TypeScript-3178C6?&style=for-the-badge&logo=typescript&logoColor=fff"
              alt="TypeScript"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/C-00599C?&style=for-the-badge&logo=c&logoColor=white"
              alt="C"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/C++-%2300599C.svg?&style=for-the-badge&logo=c%2B%2B&logoColor=white"
              alt="C++"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Java-%23ED8B00.svg?&style=for-the-badge&logo=openjdk&logoColor=white"
              alt="C++"
            />
          </div>
        </div>

        <div class="">
          <h1 class="mb-6 text-left">Frameworks</h1>
          <div
            class="flex flex-wrap items-center gap-6 rounded-xl px-6 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"
          >
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Vue.js-%234FC08D.svg?style=for-the-badge&logo=vue.js&logoColor=white"
              alt="Vue.js"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/TailwindCSS-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
              alt="TailwindCSS"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white"
              alt="Laravel"
            />
          </div>
        </div>
        <div class="">
          <h1 class="mb-6 text-left">Databases</h1>
          <div
            class="flex flex-wrap items-center gap-6 rounded-xl px-6 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"
          >
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=fff"
              alt="MySQL"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"
              alt="Postgres"
            />
          </div>
        </div>
        <div class="">
          <h1 class="mb-6 text-left">Other</h1>
          <div
            class="flex flex-wrap items-center gap-6 rounded-xl px-6 bg-[radial-gradient(40%_128px_at_50%_0%,theme(backgroundColor.white/5%),transparent)]"
          >
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/-RaspberryPi-C51A4A?style=for-the-badge&logo=Raspberry-Pi"
              alt="RaspberryPi"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white"
              alt="Postman"
            />
            <img
              class="transform hover:scale-125 ease-in-out transition duration-200"
              src="https://img.shields.io/badge/Homebrew-FBB040?style=for-the-badge&logo=homebrew&logoColor=fff"
              alt="Homebrew"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
