'use client'

import { useEffect } from 'react'

export default function GradientSync() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Set initial animation start time (use a fixed reference point)
    const startTime = Date.now()
    const animationDuration = 15000 // 15 seconds in milliseconds

    const updateAnimation = () => {
      const elapsed = (Date.now() - startTime) % animationDuration
      const progress = elapsed / animationDuration
      
      // Calculate background position for horizontal gradient (gradient-text)
      // 0% to 110% over the animation cycle
      const horizontalPosition = progress * 110
      
      // Calculate background position for vertical gradient (gradient-separator)
      // 0% to 110% over the animation cycle
      const verticalPosition = progress * 110
      
      // Update CSS custom properties
      document.documentElement.style.setProperty('--gradient-horizontal', `${horizontalPosition}%`)
      document.documentElement.style.setProperty('--gradient-vertical', `${verticalPosition}%`)
    }

    // Set initial values immediately
    updateAnimation()

    // Start the animation loop
    const animationId = requestAnimationFrame(function animate() {
      updateAnimation()
      requestAnimationFrame(animate)
    })

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return null
}
