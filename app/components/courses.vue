<script setup lang="ts">
const app = useAppConfig();
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("courses") }}
    </SectionTitle>
    <ul>
      <li v-for="item in app.courses" :key="item.href">
        <a
          :href="item.href"
          target="_blank"
          class="text-blue-500 hover:underline"
        >
          {{ item.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
