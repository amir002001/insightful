import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

const query_client = new QueryClient()
export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => createBrowserSupabaseClient())

    return (
        <QueryClientProvider client={query_client}>
            <SessionContextProvider
                supabaseClient={supabaseClient}
                initialSession={pageProps.initialSession}
            >
                <Component {...pageProps} />;
            </SessionContextProvider>
        </QueryClientProvider>
    )
}
