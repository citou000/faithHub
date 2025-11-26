<script setup lang="ts">
// const emit = defineEmits(['column-click'])
const headers: Array<string> = ['Sujet', 'Témoignages', 'Nom']
const prayers: Array<any> = [
  { id: 1, subject: 'Priez pour ma famille', testimonies: 'Dieu a béni ma famille', name: 'Jean' },
  { id: 2, subject: 'Priez pour ma santé', testimonies: 'Je suis guéri', name: 'Marie' },
  { id: 3, subject: 'Priez pour mon travail', testimonies: "J'ai trouvé un emploi", name: 'Paul' },
]
// const selectMemberAndEmit = () => {
//   emit('column-click')
// }
</script>

<template>
  <div class="relative rounded-t-lg overflow-x-auto w-full bg-white p-1">
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
</template>
