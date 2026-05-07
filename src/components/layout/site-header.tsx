import Link from 'next/link'
import { siteConfig } from '@/config/site'

export function SiteHeader() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="font-semibold">
          {siteConfig.name}
        </Link>
      </div>
    </header>
  )
}
