<script setup lang="ts">
import { ref, computed } from 'vue'
import { supabase } from '@/lib/supabaseClient.ts'
import { useToast } from 'vue-toastification'
import BaseButton from '@/components/BaseButton.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

const toast = useToast()

const anon = ref(false)
const subject = ref<string>('')
const name = ref<string>('')
const testimonies = ref<string>('')
const loading = ref<boolean>(false)

const compName = computed(() => {
  return anon.value ? 'Anonyme' : name.value.trim()
})

const readyToSubmit = computed(() => {
  return subject.value.trim().length > 0 || testimonies.value.trim().length > 0
})

const handleSubmit = async (event: Event) => {
  loading.value = true
  event.preventDefault()
  const { data, error } = await supabase.from('prayers').insert([
    {
      name: compName.value,
      subject: subject.value,
      testimonies: testimonies.value,
    },
  ])

  if (error) {
    console.error('Error submitting prayer request:', error)
  } else {
    console.log('Prayer request submitted successfully:', data)
    toast.success('Votre sujet de prière a été soumis avec succès !')
    // Clear the form fields
    name.value = ''
    subject.value = ''
    testimonies.value = ''
    anon.value = false
    loading.value = false
  }
}
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
        <form class="space-y-8 mt-8" @submit="handleSubmit">
          <div class="flex flex-col gap-2" v-show="!anon">
            <label for="name" class="text-lg font-medium">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              class="border-2 border-purple-300 rounded-md px-3 py-2 focus:border-purple-500 outline-none"
              placeholder="Votre nom"
              v-model="name"
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
              v-model="subject"
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
              v-model="testimonies"
            ></textarea>
          </div>

          <div class="pt-4">
            <BaseButton variant="primary" type="submit" :disabled="loading || !readyToSubmit">
              <span v-if="!loading">Soumettre la prière</span>
              <LoadingSpinner v-else size="sm" />
            </BaseButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
