<script setup lang="ts">
const { data: courses } = await useAsyncData(() => {
  return queryCollection("courses").all();
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("courses") }}
    </SectionTitle>
    <ul class="grid grid-cols-2 gap-y-[0.5em]">
      <li
        v-for="item in courses"
        :key="item.url"
        class="pl-4 relative before:content-['-'] before:absolute before:left-0"
      >
        <a :href="item.url" target="_blank" class="underline">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
