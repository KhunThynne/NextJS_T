'use client'

import FirstMenu from "@/components/Manu/FirstMenu"

export default function ContactdLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
   <FirstMenu />
        {children}
      </section>
    )
  }