'use client'

import React from 'react'
import { SessionProvider } from 'next-auth/react'


type ProvidersProps = {
  children: React.ReactNode
  // Optional: pass a session if you fetch it on the server and want to hydrate
  session?: any
}


export default function Providers({ children, session }: ProvidersProps) {
    
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}