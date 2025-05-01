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
      schema: z.object({
        body: z.any(),
      }),
    }),

    experience_en: defineCollection({
      type: "data",
      source: {
        include: "en/experience/*.md",
        prefix: "/experience",
      },
      schema: experienceSchema(),
    }),

    education: defineCollection({
      type: "data",
      source: {
        include: "education/*.yml",
        prefix: "/education",
      },
      schema: educationSchema(),
    }),

    skills_en: defineCollection({
      type: "data",
      source: {
        include: "en/skills.yml",
        prefix: "/skills",
      },
      schema: skillsSchema(),
    }),
  },
});

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

function educationSchema() {
  return z.object({
    title: z.string(),
    institution: z.string(),
    from: z.number(),
    to: z.number(),
  });
}

function skillsSchema() {
  return z.object({
    skills: z.string().array(),
  });
}
