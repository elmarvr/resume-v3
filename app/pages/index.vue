<script setup lang="ts">
const app = useAppConfig();
const { locale } = useI18n();
const country = computed(() =>
  new Intl.DisplayNames([locale.value], { type: "region" }).of("NL")
);
</script>

<template>
  <div class="pb-[2em]">
    <div class="flex justify-between">
      <div>
        <h1 class="text-2xl font-bold">
          {{ app.profile.name }}
        </h1>
        <p>{{ app.profile.city }}, {{ country }}</p>
      </div>

      <div class="flex flex-col">
        <div class="flex items-center">
          <Icon name="lucide:mail" class="mr-2" />
          <a :href="`mailto:${app.profile.email}`" class="underline">
            {{ app.profile.email }}
          </a>
        </div>

        <div class="flex items-center">
          <Icon name="lucide:github" class="mr-2" />
          <a :href="app.profile.github" class="underline">
            {{ app.profile.github }}
          </a>
        </div>

        <div class="flex items-center">
          <Icon name="lucide:globe" class="mr-2" />

          <a :href="app.profile.site" class="underline">
            {{ app.profile.site }}
          </a>
        </div>
      </div>
    </div>
  </div>

  <div class="space-y-[2em]">
    <Summary />
    <Skills />
    <Experience />
    <Education />
    <Courses />
  </div>
</template>
