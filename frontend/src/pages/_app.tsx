import { AuthProvider } from '@/contexts/AuthContext'
import type { AppProps } from 'next/app'
import '../../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}