<script setup lang="ts">
const { data: education } = await useAsyncData(async () => {
  return queryCollection("education").all();
});
</script>

<template>
  <div>
    <h2 class="text-2xl">
      {{ $t("education") }}
    </h2>
    <ul>
      <li v-for="item in education" :key="item.id">
        <p>{{ item.title }}</p>
        <p class="font-medium">{{ item.institution }}</p>
        <p class="flex items-center gap-1">
          <Icon name="lucide:calendar" />
          {{ item.from }} - {{ item.to }}
        </p>
      </li>
    </ul>
  </div>
</template>
