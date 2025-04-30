<script setup lang="ts">
const { data: experience } = await useAsyncData(async () => {
  return queryCollection("experience_en").all();
});
</script>

<template>
  <ul>
    <li v-for="item in experience" :key="item.id" class="prose">
      <h3>{{ item.title }}</h3>
      <p>{{ item.company }}</p>
      <div class="flex">
        <p class="flex-1">{{ item.from }} - {{ item.to }}</p>
        <p class="flex-1">{{ item.location }}</p>
      </div>
      <ContentRenderer :value="item" />
    </li>
  </ul>
</template>
