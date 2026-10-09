import { MetadataRoute } from 'next'
import { tools } from './data/tools'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ai-mvp-coral.vercel.app'

    const staticPages = ['', '/about', '/privacy', '/contact', '/terms'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    const toolPages = tools.map((tool) => ({
        url: `${baseUrl}/tools/${tool.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    return [...staticPages, ...toolPages]
}
