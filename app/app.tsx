import { scan } from 'react-scan'
// react-scan should be imported before any other react imports
import '@/styles/app.css'
// The only reason to import css here is to make animations work
import { FullPageLoading } from '@/components/shared/FullPageLoading'
import { queryClient } from '@/lib/config/query'
import { router } from '@/lib/config/router'
import { AUTH } from '@/lib/constants/auth'
import { useAuth } from '@/lib/hooks/useAuth'
import { Auth0Provider } from '@auth0/auth0-react'
import { QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'
import { Provider as JotaiProvider } from 'jotai'
import { ThemeProvider } from 'next-themes'

if (import.meta.env.MODE === 'development' && import.meta.env.VITE_REACT_SCAN_ENABLED === 'true') {
  scan({ enabled: true })
}

export function App() {
  return (
    <Auth0Provider
      authorizationParams={{ redirect_uri: AUTH.AUTH0_CALLBACK_URL }}
      cacheLocation="localstorage"
      clientId={AUTH.AUTH0_CLIENT_ID}
      domain={AUTH.AUTH0_DOMAIN}
      useRefreshTokens
    >
      <QueryClientProvider client={queryClient}>
        <JotaiProvider>
          <ThemeProvider attribute="class">
            <RouterProviderWithContext />
          </ThemeProvider>
        </JotaiProvider>
      </QueryClientProvider>
    </Auth0Provider>
  )
}

function RouterProviderWithContext() {
  const auth = useAuth()

  if (auth.isLoading) {
    return <FullPageLoading size={60} />
  }

  return <RouterProvider context={{ auth }} router={router} />
}
