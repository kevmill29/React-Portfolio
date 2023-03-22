import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    }),
    ({
      name: "companyImage",
      title: "Company Image",
      type: "image",
    }),
    ({
    name: "company",
    title: "Company",
    type: "text",
    }),
    ({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
      }),
      ({
        name: "dateEnded",
        title: "DateEnded",
        type: "date",
        }),
        ({
          name: "isCurrentlyWorkingHere",
          title: "IsCurrentlyWorkingHere",
          type: "boolean",
        }),
        ({
          name: "technologies",
          title: "Technologies",
          type: "array",
          of: [{ type: "reference", to: { type: "skill" } }],
        }),
        ({
          name: "points",
          title: "Points",
          type: "array",
          of: [{ type: "string" }],
        }),
        ({
          name: "socials",
          title: "Socials",
          type: "array",
          of: [{ type: "reference", to: { type: "social" } }],
        }),
  ],
})
 