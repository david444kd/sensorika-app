'use client'

import { Category, CARDS } from '@/lib/cards/cards'
import { Toaster } from 'react-hot-toast'
import PecsCard from '@/components/cards/PecsCard'
import { useState } from 'react'
import ToggleCategory from '@/components/cards/ToggleCategory'

export default function CardsPage() {
  const [category, setCategory] = useState<Category>('eat')
  const items = CARDS[category]

  return (
    <main className='flex flex-col gap-6 p-6'>
      <ToggleCategory category={category} setCategory={setCategory} />
      <section className='grid grid-cols-2  gap-4'>
        {items.map((it, idx) => (
          <PecsCard item={it} key={idx} />
        ))}
      </section>
      <Toaster
        position='top-center'
        toastOptions={{
          success: {
            icon: null,
            duration: 3000,
          },
        }}
      />
    </main>
  )
}
