<template>
  <table class="w-full border-collapse p-5 text-lg h-full rounded-lg">
    <thead class="bg-orange-100 text-lg">
      <tr>
        <th
          class="py-2 px-5 border border-red-800"
          v-for="(title, index) in headers"
          :key="index"
        >
          {{ title.title }}
        </th>
      </tr>
    </thead>
    <tbody class="text-center">
      <tr class="even:bg-blue-100" v-for="(item, index) in body" :key="index">
        <td
          class="border border-red-800"
          v-for="(col, ind) in headers"
          :key="ind"
        >
          <slot :name="`body_${col.value}`" :item="item">
            {{ item[col.value] }}
          </slot>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
const props = defineProps({
  headers: Array,
  body: Array,
});
</script>

<style lang="scss" scoped></style>
