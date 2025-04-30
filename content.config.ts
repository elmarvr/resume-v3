import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "page",
      source: {
        include: "en/**/*.md",
        exclude: ["en/experience/*.md", "en/education/*.md"],
        prefix: "/",
      },
      schema: contentSchema(),
    }),

    experience_en: defineCollection({
      type: "data",
      source: {
        include: "en/experience/*.md",
        prefix: "/",
      },
      schema: experienceSchema(),
    }),

    education_en: defineCollection({
      type: "data",
      source: {
        include: "en/education/*.json",
        prefix: "/",
      },
      schema: experienceSchema(),
    }),
  },
});

function contentSchema() {
  return z.object({
    title: z.string(),
  });
}

function experienceSchema() {
  return z.object({
    title: z.string(),
    company: z.string(),
    body: z.any(),
    from: z.date(),
    to: z.date().or(z.literal("present")),
    location: z.string(),
  });
}
