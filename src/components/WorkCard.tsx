'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef } from 'react'
import SkillIcon from './SkillIcon'

interface Skill {
  name: string
  icon: string
}

interface WorkItem {
  title: string
  image: string
  description: string
  descriptionExpanded?: string
  link?: string
  progress: number
  skills: Skill[]
}

interface WorkCardProps {
  item: WorkItem
  cardId: number
  isHovered: boolean
  isOtherHovered: boolean
  onHoverChange: (id: number | null) => void
}

export default function WorkCard({ item, cardId, isHovered, isOtherHovered, onHoverChange }: WorkCardProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const isExpanded = isHovered 
  const cardRef = useRef<HTMLDivElement>(null)

  const handleHoverStart = () => {
    onHoverChange(cardId)
  }

  const handleHoverEnd = () => {
    onHoverChange(null)
  }

  const handleClick = () => {
    // Toggle click state
    onHoverChange(cardId) 
  }

  return (
    <motion.div
      ref={cardRef}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      onClick={handleClick}
      className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-lg cursor-pointer group"
      animate={{
        scale: isHovered ? 1.05 : 1,
        filter: isOtherHovered ? 'brightness(0.6) blur(2px)' : 'brightness(1) blur(0px)',
        zIndex: isHovered ? 10 : 1
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Background Image */}
      <img 
        src={item.image}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Gradient Overlay - always visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      
      {/* Content Container */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        {/* Title - always visible with fixed margin */}
        <motion.h2 className="text-white text-2xl font-bold mb-4 z-10">
          {item.title}
        </motion.h2>
        
        <motion.div
          layout
          className="overflow-hidden"
        >
          <AnimatePresence >
            {/* Short Description - shown when not expanded */}
            {!isExpanded && (
              <motion.p
                key="short-description"
                initial={{ opacity: 0, height: 0, y: 10 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="text-white/90 text-sm line-clamp-2"
              >
                {item.description}
              </motion.p>
            )}
            
            {/* Expanded Content - shown on hover/click */}
            {isExpanded && (
              <motion.div
                key="expanded-content"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="space-y-4"
              >
                {/* Expanded Description */}
                <p className="text-white/90 text-sm">
                  {item.descriptionExpanded || item.description}
                </p>
            
              {/* Skills and Link - in same row */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, index) => (
                    <SkillIcon
                      key={skill.name}
                      skill={skill}
                      index={index}
                      hoveredSkill={hoveredSkill}
                      setHoveredSkill={setHoveredSkill}
                    />
                  ))}
                </div>
                
                {/* Link Button - inline with icons */}
                {item.link && (
                  <motion.a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.3, ease: "easeInOut" }}
                    onClick={(e) => e.stopPropagation()}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
                  >
                    <svg 
                      className="w-4 h-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                      />
                    </svg>
                  </motion.a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  )
}
