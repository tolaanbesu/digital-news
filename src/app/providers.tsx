'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'


type ProvidersProps = {
  children: React.ReactNode
  session?: import('next-auth').Session | null
}


export default function Providers({ children, session }: ProvidersProps) {
    
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}