<script setup lang="ts">
import Datatable from '@/components/Datatable.vue'
</script>
<template>
  <div
    class="h-fit lg:max-w-7xl w-full px-2 py-12 bg-purple-100 rounded-xl flex flex-col gap-12 min-h-screen"
  >
    <div class="flex flex-col gap-8 items-start justify-start">
      <h1 class="font-bold text-5xl text-purple-800">Sujets de prière soumis</h1>
      <Datatable class="mt-9" />
    </div>
  </div>
</template>
