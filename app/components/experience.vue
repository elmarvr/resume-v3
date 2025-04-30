<script setup lang="ts">
const { d, t } = useI18n();

const { data: experience } = await useAsyncData(async () => {
  return queryCollection("experience_en").all();
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
    <h2 class="text-2xl">
      {{ $t("experience") }}
    </h2>
    <ul>
      <li v-for="item in experience" :key="item.id">
        <h3 class="text-2xl">{{ item.title }}</h3>
        <p class="font-medium">{{ item.company }}</p>
        <div class="flex">
          <p class="flex-1 flex items-center gap-1">
            <Icon name="lucide:calendar" />
            {{ format(item.from) }} - {{ format(item.to) }}
          </p>
          <p class="flex-1 flex items-center gap-1">
            <Icon name="lucide:map-pin" />
            {{ item.location }}
          </p>
        </div>
        <ContentRenderer class="prose max-w-none" :value="item" />
      </li>
    </ul>
  </div>
</template>
