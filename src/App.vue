<script setup lang="ts">
import Particles from './components/Particles.vue'
import GithubProfileImage from './components/GithubProfileImage.vue'
import Techstack from './Techstack.vue'
import Button from './components/Button.vue'
</script>

<template>
  <Particles
    class="h-full absolute inset-0 pointer-events-none"
    :quantity="100"
    :staticity="60"
    :ease="20"
  />

  <div
    class="font-mono text-white antialiased grid grid-cols-1 items-center bg-black min-h-screen pb-12"
  >
    <div class="flex flex-col items-center justify-center max-w-screen-lg m-auto animate-fadein">
      <div class="py-10 lg:mb-20">
        <GithubProfileImage username="ibhayb" />
      </div>

      <!-- Text -->
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-2 lg:mb-20">
        <div class="text-center md:text-left font-extrabold text-3xl md:text-4xl">
          <div class="">Hello World 👋🏽🌎</div>
          <div
            class="[text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200"
          >
            I'm Ibrahim Hayber, a passionate
            <span
              class="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden"
            >
              <ul class="block animate-text-slide-3 text-left leading-tight [&_li]:block">
                <li>Developer</li>
                <li>Student</li>
                <li>Learner</li>
                <li aria-hidden="true">Developer</li>
              </ul>
            </span>
          </div>
          with an insatiable love for programming and lifelong learning.
        </div>
      </div>
      <!-- Show Techstack button -->
      <Button ahref="#techstack" button-text="My Techstack 👀" />
    </div>
  </div>

  <div class="bg-black border-t border-gray-600" id="techstack">
    <Techstack />
  </div>

  <footer
    class="fixed bottom-0 left-0 z-20 w-full p-4 bg-black border-t border-gray-600 shadow md:flex md:items-center md:justify-between md:p-6"
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
      <a class="hover:text-indigo-600" target="_blank" rel="noopener noreferrer">
        I love birbs 🦜 & cars 🐈
      </a>
    </span>

    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
      <li>
        <a href="#" class="hover:text-indigo-600 me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="https://github.com/ibhayb" target="_blank" class="group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="text-white group-hover:text-indigo-600 transition-colors duration-300"
          >
            <path
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.438 9.799 8.207 11.387.599.111.793-.261.793-.577 0-.285-.011-1.241-.016-2.252-3.338.725-4.042-1.612-4.042-1.612-.545-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.833 2.809 1.304 3.495.997.108-.774.419-1.304.763-1.604-2.666-.304-5.467-1.333-5.467-5.931 0-1.309.469-2.381 1.237-3.221-.124-.304-.536-1.527.117-3.182 0 0 1.009-.322 3.301 1.23a11.515 11.515 0 013.003-.403c1.018.005 2.044.137 3.003.403 2.291-1.552 3.299-1.23 3.299-1.23.655 1.655.243 2.878.119 3.182.77.84 1.235 1.912 1.235 3.221 0 4.609-2.804 5.623-5.476 5.92.43.371.816 1.102.816 2.222 0 1.604-.014 2.898-.014 3.292 0 .319.192.694.801.576C20.565 21.796 24 17.31 24 12 24 5.37 18.63 0 12 0z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </footer>
</template>
