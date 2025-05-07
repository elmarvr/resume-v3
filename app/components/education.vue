<script setup lang="ts">
const { data: education } = await useAsyncData(async () => {
  return queryCollection("education").order("from", "DESC").all();
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("education") }}
    </SectionTitle>
    <ul class="space-y-[1em]">
      <li v-for="item in education" :key="item.id">
        <p class="font-bold">{{ item.title }}</p>
        <p>{{ item.institution }}</p>
        <p class="flex items-center">
          <Icon name="lucide:calendar" class="mr-2" />
          {{ item.from }} - {{ item.to }}
        </p>
      </li>
    </ul>
  </div>
</template>
