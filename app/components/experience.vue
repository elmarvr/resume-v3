<script setup lang="ts">
const { locale } = useI18n();

const { data: experience } = await useAsyncData(async () => {
  return queryCollection(`experience_${locale.value}`)
    .order("from", "DESC")
    .all();
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("experience") }}
    </SectionTitle>
    <ul class="space-y-[2em]">
      <ExperienceItem v-for="item in experience" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
