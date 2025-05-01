<script setup lang="ts">
const { data: skills } = await useAsyncData(async () => {
  return queryCollection("skills_en")
    .first()
    .then((data) => data?.skills);
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("skills") }}
    </SectionTitle>
    <ul>
      <li v-for="item in skills" :key="item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
