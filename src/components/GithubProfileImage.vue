<template>
  <div class="relative flex justify-center items-center">
    <div
      class="flex justify-center items-center relative"
      :class="{
        'w-[130px] h-[130px]': smallScreen,
        'w-[200px] h-[200px]': !smallScreen
      }"
    >
      <div
        class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"
      ></div>
      <div>
        <img
          v-if="profileImageUrl"
          :src="profileImageUrl"
          alt="GitHub Profile - Conic Gradient"
          class="rounded-full"
          :class="{
            'w-[100%] h-[100%]': smallScreen,
            'w-[110%] h-[110%]': !smallScreen
          }"
        />
        <p v-else class="text-gray-500">Loading...</p>
      </div>
      <div
        class="w-[108%] h-[108%] shadow-lg shadow-violet-500 bg-transparent rounded-full absolute animate-spin_left"
      ></div>

      <div
        class="w-[106%] h-[106%] shadow-lg shadow-cyan-500 bg-transparent rounded-full absolute animate-spin_right_fast"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    username: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      profileImageUrl: '' as string,
      smallScreen: false
    }
  },
  mounted() {
    this.fetchGitHubProfileImage()
    this.checkScreenSize()
    window.addEventListener('resize', this.checkScreenSize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize)
  },
  methods: {
    async fetchGitHubProfileImage(): Promise<void> {
      try {
        const response = await fetch(`https://api.github.com/users/${this.username}`)
        const data: { avatar_url: string } = await response.json()
        this.profileImageUrl = data.avatar_url
      } catch (error) {
        console.error('Error fetching GitHub profile image:', error)
      }
    },
    checkScreenSize() {
      this.smallScreen = window.innerWidth < 640 // Adjust the breakpoint as needed
    }
  }
})
</script>

<style>
@property --border-angle {
  inherits: false;
  initial-value: 0deg;
  syntax: '<angle>';
}
</style>
