'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface TabNavigationProps {
  activeTab: 'home' | 'work' | 'resume' | 'contact'
  onTabChange: (tab: 'home' | 'work' | 'resume' | 'contact', color: 'red' | 'yellow' | 'blue' | 'purple') => void
  disabled?: boolean
}

export default function TabNavigation({ activeTab, onTabChange, disabled = false }: TabNavigationProps) {
  const tabs = [
    { id: 'home' as const, label: 'Home', color: 'red' as const, hoverColor: 'hover:border-theme-red' },
    { id: 'work' as const, label: 'Work', color: 'yellow' as const, hoverColor: 'hover:border-theme-yellow' },
    { id: 'resume' as const, label: 'Resume', color: 'blue' as const, hoverColor: 'hover:border-theme-blue' },
    { id: 'contact' as const, label: 'Contact', color: 'purple' as const, hoverColor: 'hover:border-theme-purple' },
  ]

  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null)

  const updatePillPosition = () => {
    const activeButton = buttonRefs.current[activeTab]
    const container = containerRef.current
    if (!activeButton || !container) return
    const containerRect = container.getBoundingClientRect()
    const buttonRect = activeButton.getBoundingClientRect()
    setPillStyle({
      left: buttonRect.left - containerRect.left,
      width: buttonRect.width,
    })
  }

  useEffect(() => {
    updatePillPosition()
  }, [activeTab])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    const ro = new ResizeObserver(updatePillPosition)
    ro.observe(container)
    return () => ro.disconnect()
  }, [activeTab])

  return (
    <div className="w-full max-w-[860px] px-4 md:px-0 flex justify-center ">
      <div
        ref={containerRef}
        className="flex justify-between relative gap-2 border border-gray-500 border-card rounded-full px-2 py-2 shadow-lg overflow-hidden"
      >
        {/* Sliding background pill */}
        {pillStyle && (
          <motion.div
            className="absolute top-2 bottom-2 rounded-full bg-white/10 pointer-events-none"
            initial={false}
            animate={{
              left: pillStyle.left,
              width: pillStyle.width,
            }}
            transition={{
              type: 'spring',
              stiffness: 600,
              damping: 30,
            }}
          />
        )}
        {tabs.map((tab) => (
          <button
            key={tab.id}
            ref={(el) => { buttonRefs.current[tab.id] = el }}
            onClick={() => onTabChange(tab.id, tab.color)}
            disabled={disabled}
            className={`
              relative z-10 transition-colors duration-300 flex justify-center items-center flex-col text-sm  
              py-1 md:py-2 px-2 md:px-4 rounded-full border border-transparent
              ${activeTab === tab.id ? 'text-white' : 'text-card'}
              ${`cursor-pointer ${tab.hoverColor}`}
            `}
          >
            <h3>{tab.label}</h3>
          </button>
        ))}
      </div>
    </div>
  )
}
