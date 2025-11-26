<script setup lang="ts">
import { ref } from 'vue'

const anon = ref(false)
</script>

<template>
  <div class="h-fit flex items-center justify-center bg-purple-100 p-6 w-full">
    <div
      class="flex items-center justify-center h-full flex-col text-gray-700 lg:max-w-2xl rounded-xl bg-white"
    >
      <div class="w-full h-64 overflow-hidden rounded-t-xl">
        <img src="/src/assets/prayer.jpg" alt="" />
      </div>
      <div class="w-full max-w-2xl rounded-xl px-8">
        <h1 class="text-4xl font-bold text-gray-700 mb-6 p-4 text-left">
          Soumettez vos sujets de prière
        </h1>
        <blockquote class="mb-4 border-l-3 pl-2">
          <p>
            Ne vous inquiétez de rien; mais en toute chose faites connaître vos besoins à Dieu par
            des prières et des supplications, avec des actions de grâces.
          </p>
        </blockquote>
        <p><cite>Philippiens 4:6</cite></p>
        <form class="space-y-8 mt-8">
          <div class="flex flex-col gap-2" v-if="!anon">
            <label for="name" class="text-lg font-medium">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              class="border-2 border-purple-300 rounded-md px-3 py-2 focus:border-purple-500 outline-none"
              placeholder="Votre nom"
            />
          </div>
          <div>
            <label class="flex items-center gap-2">
              <input type="checkbox" id="anon" v-model="anon" class="accent-purple-600 h-4 w-4" />
              Soumettre anonymement
            </label>
          </div>

          <div class="flex flex-col gap-2">
            <label for="prayer" class="text-lg font-medium"> Sujet de prière </label>
            <textarea
              name="prayer"
              id="prayer"
              rows="4"
              required
              class="border-2 border-purple-300 rounded-md px-3 py-2 focus:border-purple-500 outline-none w-full resize-none"
              placeholder="Je prie pour..."
            ></textarea>
          </div>

          <div class="flex flex-col gap-2">
            <label for="testimony" class="text-lg font-medium"> Témoignages </label>
            <textarea
              name="testimony"
              id="testimony"
              placeholder="Voici ce que Dieu a fait pour moi..."
              rows="4"
              class="border-2 border-purple-300 rounded-md px-3 py-2 focus:border-purple-500 outline-none w-full resize-none"
            ></textarea>
          </div>

          <div class="pt-4">
            <button
              type="submit"
              class="w-full py-3 rounded-md bg-purple-600 text-white font-semibold hover:bg-purple-700 transition cursor-pointer"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
