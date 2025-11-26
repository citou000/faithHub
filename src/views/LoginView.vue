<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const email = ref<string>('')
const password = ref<string>('')
const loading = ref<boolean>(false)

const handleConnect = () => {
  alert(
    'La fonctionnalité de connexion est actuellement désactivée pour maintenance. Veuillez réessayer plus tard.',
  )
  return
}
</script>

<template>
  <div class="flex flex-col items-center bg-purple-100 w-full h-screen justify-center gap-7">
    <div
      class="bg-white flex flex-col gap-4 px-2 min-h-fit md:text-base md:rounded-2xl text-sm relative justify-center lg:w-1/3 lg:py-12 lg:h-fit w-full h-screen"
    >
      <div class="flex flex-col items-center">
        <!-- <img :src="logo" alt="Logo" class="size-12 object-contain" /> -->
        <h1 class="text-balance text-gray-400">Bon retour sur faithHub</h1>
      </div>
      <form
        class="flex flex-col gap-3 p-5 rounded-2xl items-center w-full"
        @submit.prevent="handleConnect"
      >
        <div class="flex flex-col gap-1 w-full">
          <label for="email">E-mail</label>
          <input
            required
            type="email"
            id="email"
            v-model="email"
            class="border-2 border-purple-100 focus:border-purple-400 outline-0 focus:border-2 rounded-md py-2 px-1 transition-all ease-in"
            autocomplete="username"
            placeholder="Nom d'utilisateur"
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
            autocomplete="current-password"
            placeholder="Mot de passe"
          />
        </div>
        <div class="flex justify-center mt-4 w-full">
          <BaseButton variant="primary" :disabled="loading || email === '' || password === ''">
            <LoadingSpinner v-if="loading" size="sm" color="white" />
            <span v-else>Se connecter</span>
          </BaseButton>
        </div>
      </form>
      <div class="text-sm items-center text-center mx-auto absolute bottom-4 left-0 right-0">
        Vous n'avez pas de compte ?
        <RouterLink to="/signup" class="text-purple-600 font-bold">Inscrivez-vous</RouterLink>
      </div>
    </div>
  </div>
</template>
