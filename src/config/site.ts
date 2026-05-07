export const siteConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? 'StackSpend',
  url: process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
  description: 'Track and manage your software stack spending.',
}

export type SiteConfig = typeof siteConfig
