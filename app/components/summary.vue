<script setup lang="ts">
const { locale } = useI18n();
const { data: summary } = await useAsyncData(async () => {
  return queryCollection(`content_${locale.value}`)
    .where("stem", "=", "summary")
    .first();
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
