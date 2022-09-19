import '@/styles/globals.css'

import { supabaseClient } from '@supabase/auth-helpers-nextjs'
import { UserProvider } from '@supabase/auth-helpers-react'
import type { AppProps } from 'next/app'

export { reportWebVitals } from 'next-axiom'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default MyApp
