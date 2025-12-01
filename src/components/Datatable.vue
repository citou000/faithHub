<script setup lang="ts">
// const emit = defineEmits(['column-click'])
import { supabase } from '@/lib/supabaseClient.ts'
import { ref, onMounted } from 'vue'
import LoadingSpinner from './LoadingSpinner.vue'
const headers: Array<string> = ['Sujet', 'Nom']
interface Prayer {
  id: string | number // match your table type
  subject: string | null
  testimonies: string | null
  name: string | null
}

const prayers = ref<Prayer[]>([])
const loading = ref<boolean>(false)

async function fetchPrayers(): Promise<void> {
  loading.value = true
  const { data, error } = await supabase.from('prayers').select('*')
  if (error) {
    throw error
  }
  prayers.value = data
  console.log(prayers.value)
  loading.value = false
}

onMounted(() => {
  fetchPrayers()
})
// const selectMemberAndEmit = () => {
//   emit('column-click')
// }
</script>

<template>
  <div class="flex flex-col gap-8 items-start justify-center lg:w-[70%] h-full w-full">
    <div
      class="relative rounded-t-lg overflow-x-auto w-full bg-white p-1"
      v-if="prayers.length > 0 && !loading"
    >
      <table class="w-full text-sm">
        <thead>
          <tr class="border-b-2 border-gray-300">
            <th
              v-for="header in headers"
              :key="header"
              :class="[
                'p-2 text-left font-semibold cursor-default text-xl',
                ['Témoignages'].includes(header) ? 'hidden md:table-cell' : '',
              ]"
            >
              {{ header }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="prayer in prayers"
            :key="prayer.id"
            class="hover:bg-gray-100 cursor-pointer border-t-2 border-gray-300"
          >
            <td class="p-3 font-semibold text-md">
              {{ prayer.subject }}
            </td>
            <!-- <td class="p-3 text-gray-600 hidden md:table-cell">
              {{ prayer.testimonies ? prayer.testimonies : "Pas encore de témoignages" }}
            </td> -->
            <td class="p-3">
              {{ prayer.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div 
      v-else-if="loading"
      class="w-full flex items-center justify-center"
    >
      <LoadingSpinner />
    </div>
    <div v-else class="text-gray-400 w-full flex justify-center py-8 items-center h-full">
      <p>Pas encore de prière</p>
    </div>
  </div>
</template>
