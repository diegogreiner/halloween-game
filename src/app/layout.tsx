import type { Metadata } from 'next'
import './globals.css'
import { ContextProvider } from '@/context/Context'

export const metadata: Metadata = {
  title: 'Halloween Game',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <ContextProvider>
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
