import './globals.css'
import { Inter } from 'next/font/google'
import ContextProvider from './provider'
import Fingerspose from '@/components/Fingerspose'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tecnologia da Informação',
  description: 'Site de apresentação da profissão',
}

export default function RootLayout({
  children,
}: {
  // eslint-disable-next-line no-undef
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-black`}>
        <ContextProvider>
          <Fingerspose />
          {children}
        </ContextProvider>
      </body>
    </html>
  )
}
