<script setup lang="ts">
const { data: summary } = await useAsyncData(async () => {
  return queryCollection("content_en").where("stem", "=", "summary").first();
});
</script>

<template>
  <div v-if="summary">
    <SectionTitle>
      {{ $t("summary") }}
    </SectionTitle>
    <ContentRenderer :value="summary" />
  </div>
</template>
