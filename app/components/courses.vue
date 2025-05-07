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
    <ul class="space-y-[0.5em]">
      <li
        v-for="item in courses"
        :key="item.url"
        class="pl-4 relative before:content-['-'] before:absolute before:left-0"
      >
        <a
          :href="item.url"
          target="_blank"
          class="text-blue-500 hover:underline"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
