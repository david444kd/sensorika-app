'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type GameType = 'aromaloto' | 'soundloto'

const GAME_IMAGES: Record<GameType, string[]> = {
  aromaloto: [
    '/games/aromoloto/img1.jpg',
    '/games/aromoloto/img2.jpg',
    '/games/aromoloto/img3.jpg',
    '/games/aromoloto/img4.jpg',
  ],
  soundloto: [
    '/games/soundloto/img1.jpg',
    '/games/soundloto/img2.jpg',
  ],
}

export default function GamesPage() {
  const t = useTranslations('Games')
  const [game, setGame] = useState<GameType>('aromaloto')

  return (
    <main className="flex flex-col gap-6 p-6 max-w-4xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">{t('title')}</h1>
        <p className="text-muted-foreground">{t('description')}</p>
      </div>

      <ToggleGroup
        type="single"
        variant="outline"
        value={game}
        onValueChange={(v) => v && setGame(v as GameType)}
        className="justify-start w-full"
      >
        <ToggleGroupItem className='w-1/2' value="aromaloto" aria-label={t('tabs.aromaloto')}>
          {t('tabs.aromaloto')}
        </ToggleGroupItem>
        <ToggleGroupItem className='w-1/2' value="soundloto" aria-label={t('tabs.soundloto')}>
          {t('tabs.soundloto')}
        </ToggleGroupItem>
      </ToggleGroup>

      <Card>
        <CardHeader>
          <CardTitle>{t(`${game}.title`)}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {GAME_IMAGES[game].map((src, index) => (
              <div key={index} className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                <Image
                  src={src}
                  alt={`${game} image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
          <p className="whitespace-pre-wrap leading-relaxed text-lg text-muted-foreground">
            {t(`${game}.description`)}
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
