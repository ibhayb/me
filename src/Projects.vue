<script setup lang="ts">
import ProjectWidget from './components/ProjectWidget.vue'
</script>

<template>
  <div
    class="gap-10 font-mono text-white antialiased grid grid-cols-1 items-center justify-center min-h-screen w-full max-w-7xl mx-auto px-4 py-12"
  >
    <div class="text-3xl lg:text-5xl text-left w-full font-bold" v-motion-slide-visible-right>
      My Projects 👷🏼‍♂️🚧
    </div>

    <div class="relative text-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <ProjectWidget
          title="ANPR"
          description="Automatic Number Plate Recognition using a Raspberry Pi, a Camera and some AI magic."
          v-motion-slide-visible-left
        />
        <ProjectWidget
          title="ADLT"
          description="A learning tool for Algorithms and Data Structures."
          link="https://jensliebehenschel.github.io/ADLT/"
          v-motion-slide-visible-right
        />
        <ProjectWidget
          title="Snake-AI"
          description="Implementation of intelligent movement of a snake in a 2D grid."
          link="https://github.com/ibhayb/Snake-AI.git"
          v-motion-slide-visible-left
        />
        <ProjectWidget
          title="WIND"
          description="Weather Information Network Dashboard. A web application to visualize weather quality."
          v-motion-slide-visible-right
        />
        <ProjectWidget
          title="Minimal todo app"
          description="A minimal todo desktop-app with a retro game theme built with Vue, Tailwind CSS and Tauri."
          link="https://github.com/ibhayb/minimal-todo-app/releases/tag/v0.1.0"
          v-motion-slide-visible-left
        />
      </div>
    </div>
  </div>
</template>
