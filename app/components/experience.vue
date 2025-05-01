<script setup lang="ts">
const { d, t, locale } = useI18n();

const { data: experience } = await useAsyncData(async () => {
  return queryCollection(`experience_${locale.value}`)
    .order("from", "DESC")
    .all();
});

function format(date: Date | "present") {
  if (date === "present") {
    return t("present");
  }

  return d(date, {
    year: "numeric",
    month: "long",
  });
}
</script>

<template>
  <div>
    <SectionTitle>
      {{ $t("experience") }}
    </SectionTitle>
    <ul class="space-y-8">
      <li v-for="item in experience" :key="item.id">
        <h3 class="text-base font-medium">{{ item.title }}</h3>
        <p>{{ item.company }}</p>
        <div class="flex pb-4">
          <p class="flex-1 flex items-center">
            <Icon name="lucide:calendar" class="mr-2" />
            {{ format(item.from) }} - {{ format(item.to) }}
          </p>
          <p class="flex-1 flex items-center">
            <Icon name="lucide:map-pin" class="text-sm mr-2" />
            {{ item.location }}
          </p>
        </div>
        <ContentRenderer class="" :value="item" />
      </li>
    </ul>
  </div>
</template>
