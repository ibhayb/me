<template>
  <div class="relative flex justify-center items-center">
    <div class="flex w-[200px] h-[200px] justify-center items-center relative">
      <div
        class="w-[110%] h-[110%] shadow-lg shadow-pink-500 bg-transparent rounded-full absolute animate-spin_right"
      ></div>
      <div>
        <img
          v-if="profileImageUrl"
          :src="profileImageUrl"
          alt="GitHub Profile - Conic Gradient"
          class="rounded-full w-[110%] h-[110%]"
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
      profileImageUrl: '' as string
    }
  },
  mounted() {
    this.fetchGitHubProfileImage()
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
