'use client'

import { useState, useRef, useEffect } from 'react'
import TabNavigation from '@/components/TabNavigation'
import HomeContent from '@/components/HomeContent'
import WorkContent from '@/components/WorkContent'
import dynamic from 'next/dynamic';

import ContactContent from '@/components/ContactContent'
import Footer from '@/components/Footer'
import { AnimatePresence, motion } from 'framer-motion'

const ResumeContent = dynamic(() => import('@/components/ResumeContent'), {
  ssr: false,
});

export default function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'work' | 'resume' | 'contact'>('home')
  const [slideColor, setSlideColor] = useState<'red' | 'yellow' | 'blue' | 'purple'>('red')
  const [showSlide, setShowSlide] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [nextTab, setNextTab] = useState<typeof activeTab | null>(null)
  const [lockedHeight, setLockedHeight] = useState<number>(0)
  const [currentHeight, setCurrentHeight] = useState<number | null>(null)
  
  const currentRef = useRef<HTMLDivElement>(null)
  const nextRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pendingChange = useRef<{ tab: typeof activeTab; color: typeof slideColor } | null>(null)

  // Measure and maintain content height
  useEffect(() => {
    if (!isAnimating && currentRef.current) {
      // Measure the actual content height after render
      const contentHeight = currentRef.current.offsetHeight
      setCurrentHeight(contentHeight)
    }
  }, [activeTab, isAnimating])

  // When next tab is set, wait for it to render, then measure heights and start animation
  useEffect(() => {
    if (nextTab && pendingChange.current) {
      const { tab, color } = pendingChange.current
      
      // Wait for next component to fully render before measuring
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const currentContentHeight = currentRef.current?.offsetHeight || 0
          let nextContentHeight = nextRef.current?.offsetHeight || 0
          // Resume loads async (PDF); estimate its height based on page width
          // so the slide animation has enough space and doesn't clip
          const approximateWidth =
            typeof window !== 'undefined'
              ? Math.min(window.innerWidth * 0.9, 860) // matches ResumeContent max width
              : 860
          const minResumeHeight = Math.round(approximateWidth * 1.4) // A4/Letter-ish aspect ratio
          if (tab === 'resume') {
            nextContentHeight = Math.max(nextContentHeight, minResumeHeight)
          }
          const currentFullHeight = currentContentHeight
          const nextFullHeight = nextContentHeight
          const maxHeight = Math.max(currentFullHeight, nextFullHeight)
          
          // Lock current height first for smooth transition
          setCurrentHeight(currentFullHeight)
          
          // Set overflow-hidden BEFORE height changes to prevent flash
          setIsAnimating(true)
          
          // On next frame, transition to max height and start animation
          requestAnimationFrame(() => {
            setLockedHeight(maxHeight)
            setSlideColor(color)
            setShowSlide(true)
          })
          
          // After slide covers content, switch tab
          setTimeout(() => {
            setActiveTab(tab)
            setNextTab(null)
            
            // After content switches, remove slide
            setTimeout(() => {
              setShowSlide(false)
              
              // After slide exits, transition to new content height
              setTimeout(() => {
                setLockedHeight(0)
                
                // Wait for height transition to complete before removing overflow-hidden
                setTimeout(() => {
                  setIsAnimating(false)
                }, 5)
              }, 500)
            }, 100)
          }, 500)
        })
      })
      
      pendingChange.current = null
    }
  }, [nextTab])

  const handleTabChange = (tab: typeof activeTab, color: typeof slideColor) => {
    if (isAnimating || tab === activeTab) return
    
    pendingChange.current = { tab, color }
    setNextTab(tab)
  }

  const renderContent = (tab: typeof activeTab) => {
    switch (tab) {
      case 'home': return <HomeContent />
      case 'work': return <WorkContent />
      case 'resume': return <ResumeContent />
      case 'contact': return <ContactContent />
    }
  }

  return (
    <>
      <div className="w-full min-h-full py-[50px] pb-[100px] flex flex-col items-center relative px-0 md:px-[10%]">
        <div className="w-full max-w-[860px] px-4 md:px-0">
          <div className="mb-10">
            <h1 className="text-center md:text-left">
              Jonathan
              <span className="inline-block mx-1 text-[0.5em]">Paul</span>
              <span className="relative inline-block my-0 text-title-text rounded-xl ">
                <span className="absolute inset-0 gradient-text opacity-60 rounded-xl blur-md"></span>
                <span className="relative gradient-text p-2 rounded-xl shadow-lg">Wu</span>
              </span>
            </h1>
          </div>

          <TabNavigation
            activeTab={nextTab || activeTab}
            onTabChange={handleTabChange}
            disabled={isAnimating}
          />

          <div 
            ref={containerRef}
            className={`relative ${isAnimating ? 'overflow-hidden' : 'overflow-visible'} mt-10`}
            style={{
              height:
                !isAnimating && activeTab === 'resume'
                  ? 'auto'
                  : lockedHeight > 0
                    ? `${lockedHeight}px`
                    : currentHeight != null
                      ? `${currentHeight}px`
                      : 'auto',
              transition:
                !isAnimating && activeTab === 'resume'
                  ? 'none'
                  : 'height 0.5s ease-in-out'
            }}
          >
            <AnimatePresence>
              {showSlide && (
                <motion.div
                  className={`absolute top-0 left-0 w-full h-full z-50 gradient-background ${slideColor === 'red'
                    ? 'bg-red-500'
                    : slideColor === 'yellow'
                      ? 'bg-yellow-500'
                      : slideColor === 'blue'
                        ? 'bg-blue-500'
                        : 'bg-purple-500'
                    }`}
                  style={{ transformOrigin: 'top' }}
                  initial={{ y: '-100%' }}
                  animate={{ y: 0 }}
                  exit={{
                    y: '100%',
                    transition: { duration: 0.5 }
                  }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
            
            <div ref={currentRef} className="w-full ">
              {renderContent(activeTab)}
            </div>

            {/* Pre-render next component for height measurement */}
            {nextTab && nextTab !== activeTab && (
              <div ref={nextRef} className="w-full absolute top-0 invisible pointer-events-none" aria-hidden="true">
                {renderContent(nextTab)}
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
