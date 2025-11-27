<script setup lang="ts">
import Datatable from '@/components/Datatable.vue'

</script>
<template>
  <div
    class="h-fit lg:max-w-7xl w-full px-2 py-12 bg-purple-100 rounded-xl flex flex-col items-center min-h-screen"
  >
    <div class="flex flex-col w-full lg:w-[70%] bg-gray-200 rounded-xl">
      <!-- Heading always at the top -->
      <h1 class="font-bold text-5xl text-purple-800 mb-8">Sujets de prière soumis</h1></div>

      <!-- Datatable or empty state vertically centered -->
      <div class="flex-1 flex items-center justify-center">
        <Datatable />
      </div>
  </div>
</template>
