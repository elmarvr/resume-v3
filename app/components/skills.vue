<script setup lang="ts">
const { locale } = useI18n();
const { data: skills } = await useAsyncData(async () => {
  return queryCollection(`skills_${locale.value}`)
    .first()
    .then((data) => data?.skills);
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("skills") }}
    </SectionTitle>
    <ul class="space-y-2">
      <li v-for="item in skills" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
