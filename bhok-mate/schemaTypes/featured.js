import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Featured Menu Category',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Featured Category name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_desc',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'restaurant',
      title: 'Restaurant',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [{type: 'reference', to: [{type: 'restaurant'}]}],
    }),
  ],
})
