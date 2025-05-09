<script setup lang="ts">
const { locale } = useI18n();
const { data: summary } = await useAsyncData(async () => {
  return queryCollection(`content_${locale.value}`)
    .where(
      "stem",
      "=",
      `${locale.value === "en" ? "" : `${locale.value}/`}summary`
    )
    .first();
});

console.log("summary", summary.value);
</script>

<template>
  <div v-if="summary">
    <SectionTitle>
      {{ $t("summary") }}
    </SectionTitle>
    <ContentRenderer :value="summary" />
  </div>
</template>
