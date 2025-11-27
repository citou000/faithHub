<script setup lang="ts">
// const emit = defineEmits(['column-click'])
import { supabase } from '@/lib/supabaseClient.ts'
import { ref, onMounted } from 'vue'
const headers: Array<string> = ['Sujet', 'Témoignages', 'Nom']
interface Prayer {
  id: string | number // match your table type
  subject: string | null
  testimonies: string | null
  name: string | null
}

const prayers = ref<Prayer[]>([])

async function fetchPrayers(): Promise<void> {
  const { data, error } = await supabase.from('prayers').select('*')
  if (error) {
    throw error
  }
  prayers.value = data
}

onMounted(() => {
  fetchPrayers()
})
// const selectMemberAndEmit = () => {
//   emit('column-click')
// }
</script>

<template>
  <div class="flex flex-col gap-8 items-start justify-center lg:w-[70%] h-full">
    <div
      class="relative rounded-t-lg overflow-x-auto w-full bg-white p-1"
      v-if="prayers.length > 0"
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
            <td class="p-3 text-gray-600 hidden md:table-cell">
              {{ prayer.testimonies }}
            </td>
            <td class="p-3">
              {{ prayer.name }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="text-gray-400 w-full flex justify-center py-8 items-center h-full">
      <p>Pas encore de prière</p>
    </div>
  </div>
</template>
