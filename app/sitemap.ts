import type { MetadataRoute } from 'next'

const BASE_URL = 'https://opstap.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const nu = new Date()

  return [
    { url: `${BASE_URL}/`, lastModified: nu, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/vertegenwoordiger`, lastModified: nu, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/bedrijven`, lastModified: nu, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: nu, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${BASE_URL}/pers`, lastModified: nu, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/voorwaarden`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/richtlijnen`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/account-verwijderen`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/en/privacy`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/en/terms`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE_URL}/en/account-deletion`, lastModified: nu, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
