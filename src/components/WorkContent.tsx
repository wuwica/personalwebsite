'use client'

import { work } from '@/data/work'
import WorkCard from './WorkCard'
import { useState } from 'react'

export default function WorkContent() {
  const [hoveredCardId, setHoveredCardId] = useState<number | null>(null)

  return (
    <>
      <p className="py-4 px-8">Here are some solo projects I've worked on in my free time.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full max-w-[860px] p-8 mx-auto">
        {work.map((item, index) => (
          <WorkCard
            key={index}
            item={item}
            cardId={index}
            isHovered={hoveredCardId === index}
            isOtherHovered={hoveredCardId !== null && hoveredCardId !== index}
            onHoverChange={setHoveredCardId}
          />
        ))}
      </div>
    </>
  )
}
