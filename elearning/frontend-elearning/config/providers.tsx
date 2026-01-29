'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface ReactQueryProviderProps {
  children: ReactNode
}

const queryClient = new QueryClient()

// export default function Providers({ children }: { children: ReactNode }) {
//   return <QueryClientProvider client = { queryClient } > { children } < /QueryClientProvider>
// }

// const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       {children}
//       </QueryClientProvider>
//   )
// }

export default function Providers({ children }: ReactQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
