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
    <ul class="grid grid-cols-4">
      <li v-for="item in skills" :key="item" class="flex items-center">
        <Icon name="lucide:check" class="mr-2" />
        {{ item }}
      </li>
    </ul>
  </div>
</template>
