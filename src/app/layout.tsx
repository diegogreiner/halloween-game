import type { Metadata } from 'next'
import './globals.css'
import { ContextProvider } from '@/context/Context'
import StyledComponentsRegistry from './registry'

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
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ContextProvider>
      </body>
    </html>
  )
}
