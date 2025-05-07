<script setup lang="ts">
import type { StackCollectionItem } from "@nuxt/content";

defineProps<{
  item: StackCollectionItem;
}>();
</script>

<template>
  <div class="flex items-center gap-[0.5rem]">
    <Icon :name="item.icon" />
    {{ item.title }}
  </div>
</template>
