<script setup lang="ts">
import type { ExperienceEnCollectionItem } from "@nuxt/content";

const props = defineProps<{
  item: ExperienceEnCollectionItem;
}>();

const { d, t } = useI18n();

const stems = computed(() => {
  if (!props.item.stack) {
    return [];
  }
  return props.item.stack.map((s) => `stack/${s}`).sort();
});

const { data: stack } = await useAsyncData(
  `${stems.value.join(":")}`,
  async () => {
    return queryCollection("stack")
      .order("title", "ASC")
      .where("stem", "IN", stems.value)
      .all();
  }
);

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
  <li class="break-inside-avoid">
    <div class="flex items-center">
      <p class="text-base font-medium">{{ item.title }}</p>

      <span v-if="item.company" class="text-xs mx-3"> &#9679; </span>
      <p v-if="item.company">{{ item.company }}</p>
    </div>
    <div class="flex pb-[1em]">
      <p class="flex-1 flex items-center">
        <Icon name="lucide:calendar" class="mr-2" />
        {{ format(item.from) }} - {{ format(item.to) }}
      </p>
      <p v-if="item.location" class="flex-1 flex items-center">
        <Icon name="lucide:map-pin" class="text-sm mr-2" />
        {{ item.location }}
      </p>
    </div>

    <ContentRenderer :value="item" class="content" />

    <ul
      v-if="stack?.length"
      class="flex flex-wrap gap-[0.5em] pt-[1em] max-w-lg"
    >
      <li
        v-for="skill in stack"
        :key="skill.id"
        class="gap-[0.5em] flex items-center border px-2 rounded text-xs"
      >
        <Icon :name="skill.icon" />
        {{ skill.title }}
      </li>
    </ul>
  </li>
</template>

<style>
.content p + * {
  margin-top: 1em;
}

.content ul {
  list-style-type: disc;
  list-style-position: inside;
}
</style>
