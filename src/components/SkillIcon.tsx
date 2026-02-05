'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

interface Skill {
  name: string
  icon: string
}

interface SkillIconProps {
  skill: Skill
  index: number
  hoveredSkill: string | null
  setHoveredSkill: (name: string | null) => void
}

export default function SkillIcon({ skill, index, hoveredSkill, setHoveredSkill }: SkillIconProps) {
  const iconRef = useRef<HTMLDivElement>(null)
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 })
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  const updateTooltipPosition = () => {
    if (iconRef.current) {
      const rect = iconRef.current.getBoundingClientRect()
      setTooltipPosition({
        x: rect.left + rect.width / 2,
        y: rect.top - 8
      })
    }
  }
  
  const tooltip = hoveredSkill === skill.name && isMounted && (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 5 }}
      transition={{ duration: 0.15 }}
      style={{
        position: 'fixed',
        left: `${tooltipPosition.x}px`,
        top: `${tooltipPosition.y}px`,
        zIndex: 9999
      }}
      className="pointer-events-none"
    >
      <div className="px-3 py-1.5 bg-white text-black text-xs font-medium rounded-lg shadow-lg whitespace-nowrap -translate-x-1/2 -translate-y-[100%]">
        {skill.name}
      </div>
    </motion.div>
  )
  
  return (
    <>
      <div
        ref={iconRef}
        className="relative"
        onMouseEnter={() => {
          setHoveredSkill(skill.name)
          updateTooltipPosition()
        }}
        onMouseLeave={() => setHoveredSkill(null)}
      >
        <motion.img
          src={skill.icon}
          alt={skill.name}
          width={32}
          height={32}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: index * 0.05, 
            duration: 0.3, 
            ease: "easeInOut" 
          }}
          className="w-8 h-8 cursor-help"
        />
      </div>
      {isMounted && createPortal(
        <AnimatePresence>
          {tooltip}
        </AnimatePresence>,
        document.body
      )}
    </>
  )
}
