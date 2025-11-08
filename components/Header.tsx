'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const router = useRouter()

  const handleLocaleChange = (newLocale: string) => {
    const segments = pathname.split('/').filter(Boolean)
    const possibleLocales = ['ru', 'en']
    const firstSegment = segments[0]
    const isLocaleInPath = possibleLocales.includes(firstSegment)
    const pathWithoutLocale = isLocaleInPath
      ? '/' + segments.slice(1).join('/')
      : pathname
    const newPath =
      pathWithoutLocale === '/'
        ? `/${newLocale}`
        : `/${newLocale}${pathWithoutLocale}`
    router.push(newPath)
  }

  return (
    <header className='sticky top-0 z-50 border-b bg-white'>
      <div className='max-w-2xl mx-auto flex h-20 px-5 justify-between items-center'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='inline-flex items-center gap-2 group'>
            <span className='inline-flex items-center justify-center w-8 h-8 rounded-md bg-primary/10 text-primary font-bold select-none'>
              S
            </span>
            <span className='text-xl font-semibold tracking-tight group-hover:text-primary transition-colors'>
              Sensorika
            </span>
          </Link>
        </div>
        <Select value={locale} onValueChange={handleLocaleChange}>
          <SelectTrigger className='w-[100px]'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value='ru'>RU</SelectItem>
              <SelectItem value='en'>EN</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
