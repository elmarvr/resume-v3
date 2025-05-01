import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content_en: defineCollection({
      type: "data",
      source: {
        include: "en/**/*.md",
        prefix: "/",
        exclude: ["en/experience/*.md"],
      },
      schema: contentSchema(),
    }),
    content_nl: defineCollection({
      type: "data",
      source: {
        include: "nl/**/*.md",
        prefix: "/",
        exclude: ["nl/experience/*.md"],
      },
      schema: contentSchema(),
    }),

    experience_en: defineCollection({
      type: "data",
      source: {
        include: "en/experience/*.md",
        prefix: "/experience",
      },
      schema: experienceSchema(),
    }),
    experience_nl: defineCollection({
      type: "data",
      source: {
        include: "nl/experience/*.md",
        prefix: "/experience",
      },
      schema: experienceSchema(),
    }),

    skills_en: defineCollection({
      type: "data",
      source: {
        include: "en/skills.yml",
        prefix: "/skills",
      },
      schema: skillsSchema(),
    }),
    skills_nl: defineCollection({
      type: "data",
      source: {
        include: "nl/skills.yml",
        prefix: "/skills",
      },
      schema: skillsSchema(),
    }),

    education: defineCollection({
      type: "data",
      source: {
        include: "education/*.yml",
        prefix: "/education",
      },
      schema: z.object({
        title: z.string(),
        institution: z.string(),
        from: z.number(),
        to: z.number(),
      }),
    }),

    courses: defineCollection({
      type: "data",
      source: {
        include: "courses/*.yml",
        prefix: "/courses",
      },
      schema: z.object({
        title: z.string(),
        url: z.string(),
      }),
    }),
  },
});

function contentSchema() {
  return z.object({
    body: z.any(),
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

function skillsSchema() {
  return z.object({
    skills: z.string().array(),
  });
}
