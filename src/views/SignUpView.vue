<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'

const loading = ref<boolean>(false)

const email = ref<string>('')
const password = ref<string>('')
const confirmedPassword = ref<string>('')
const name = ref<string>('')
const role = ref<string>('mentor')

const handleConnect = () => {
  alert(
    "La fonctionnalité d'inscription est actuellement désactivée pour maintenance. Veuillez réessayer plus tard.",
  )
  return
}
</script>

<template>
  <div class="flex flex-col items-center bg-purple-100 w-full h-screen justify-center gap-7">
    <div
      class="bg-white py-8 flex flex-col gap-4 px-2 md:w-md md:h-auto size-full md:text-base md:rounded-2xl text-sm relative justify-center"
    >
      <div class="flex flex-col items-center">
        <!-- <img :src="logo" alt="Logo" class="size-8 object-contain" /> -->
        <h1 class="text-balance text-gray-400">Bienvenue sur Soul Connect</h1>
      </div>
      <form
        class="flex flex-col gap-3 p-5 rounded-2xl items-center w-full"
        @submit.prevent="handleConnect"
      >
        <div class="flex flex-col gap-1 w-full">
          <label for="name">Name</label>
          <input
            required
            type="text"
            id="name"
            v-model="name"
            class="border-2 border-purple-100 focus:border-purple-400 outline-0 focus:border-2 rounded-md py-2 px-1 transition-all ease-in"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label for="email">E-mail</label>
          <input
            required
            type="email"
            id="email"
            v-model="email"
            class="border-2 border-purple-100 focus:border-purple-400 outline-0 focus:border-2 rounded-md py-2 px-1 transition-all ease-in"
          />
        </div>
        <div class="flex flex-col gap-1 w-full">
          <label for="password">Password</label>
          <input
            required
            type="password"
            id="password"
            v-model="password"
            class="border-2 border-purple-100 focus:border-purple-400 outline-0 focus:border-2 rounded-md py-2 px-1 transition-all ease-in"
          />
        </div>

        <div class="flex flex-col gap-1 w-full">
          <label for="confirmedPassword">Confirmer le mot de passe</label>
          <input
            required
            type="password"
            id="confirmedPassword"
            v-model="confirmedPassword"
            class="border-2 border-purple-100 focus:border-purple-400 outline-0 focus:border-2 rounded-md py-2 px-1 transition-all ease-in"
          />
        </div>
        <div class="flex justify-center mt-4 w-full">
          <BaseButton
            variant="primary"
            :disabled="loading || !email || !password || !confirmedPassword || !name"
            type="submit"
          >
            <LoadingSpinner v-if="loading" size="sm" />
            <span v-else>S'inscrire</span>
          </BaseButton>
        </div>
      </form>
      <div class="text-sm items-center text-center mx-auto absolute bottom-4 left-0 right-0">
        Vous avez déjà un compte ?
        <RouterLink to="/login" class="text-purple-600 font-bold">Connectez-vous</RouterLink>
      </div>
    </div>
  </div>
</template>
