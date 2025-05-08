<script setup lang="ts">
const { locale } = useI18n();
const { data: skills } = await useAsyncData(async () => {
  return queryCollection(`skills_${locale.value}`).all();
});
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("skills") }}
    </SectionTitle>
    <div class="grid grid-flow-col">
      <div
        v-for="item in skills"
        class="first:*:pr-8 last:*:pl-8 last:*:data-[slot=list]:border-l"
      >
        <div class="font-bold pb-[0.5em]">
          {{ item.title }}
        </div>
        <ul data-slot="list" class="grid grid-cols-2">
          <li
            v-for="entry in item.entries"
            :key="entry"
            class="flex items-center"
          >
            <Icon name="lucide:check" class="mr-2" />
            {{ entry }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
