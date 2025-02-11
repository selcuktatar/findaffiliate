import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        pages: defineCollection({
            type: 'page',
            source: 'pages/*.json',
            schema: z.object({
                name: z.string(),
                avatar: z.string(),
                url: z.string()
            })
        })
    }
})
