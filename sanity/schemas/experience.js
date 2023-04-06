import {defineField, defineType} from 'sanity'
import social from './social'
import skill from './skill'

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
    defineField({
      name: "companyImage",
      title: "Company Image",
      type: "image",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "text",
    }),
    defineField({
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
      }),
    defineField({
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
      }),
    defineField({
      name: "isCurrentlyWorkingHere",
      title: "IsCurrentlyWorkingHere",
      type: "boolean",
    }),
    defineField({
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skill" }] }],
    }),
  ],
})
 