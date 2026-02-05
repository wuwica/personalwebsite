'use client'

import GradientSync from './GradientSync'

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GradientSync />
      {children}
    </>
  )
}
