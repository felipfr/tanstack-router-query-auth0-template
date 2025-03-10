import { useAuth0 } from '@auth0/auth0-react'
import { useQuery } from '@tanstack/react-query'
import { useCallback, useEffect } from 'react'
import { toast } from 'sonner'

const TOKEN_REFRESH_INTERVAL = 25 * 60 * 1000

export function useAuth() {
  const { isAuthenticated, user, loginWithRedirect, logout, getAccessTokenSilently, isLoading } = useAuth0()

  const {
    data: accessToken,
    error: tokenError,
    isLoading: isTokenLoading,
  } = useQuery({
    queryKey: ['auth0AccessToken'],
    queryFn: async () => {
      return await getAccessTokenSilently({
        detailedResponse: false,
        cacheMode: 'off',
      })
    },
    enabled: isAuthenticated,
    refetchInterval: TOKEN_REFRESH_INTERVAL,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
    refetchOnReconnect: true,
    refetchOnWindowFocus: true,
    staleTime: TOKEN_REFRESH_INTERVAL,
    retry: 2,
  })

  const logoutUser = useCallback(() => {
    logout({ logoutParams: { returnTo: window.location.origin } })
  }, [logout])

  const login = useCallback(() => loginWithRedirect(), [loginWithRedirect])

  const userHasPermission = useCallback(
    (roles: string[]) => {
      if (!user) return false
      const userRoles = user['user_roles']
      if (!userRoles || !Array.isArray(userRoles)) return false
      return roles.some((role) => userRoles.includes(role))
    },
    [user],
  )

  useEffect(() => {
    if (tokenError) {
      toast.error('Authentication token renewal failed', {
        description: 'Please log in again.',
      })
      logoutUser()
    }
  }, [tokenError, logoutUser])

  return {
    isAuthenticated,
    isLoading: isLoading || isTokenLoading,
    user,
    accessToken,
    login,
    logout: logoutUser,
    userHasPermission,
  }
}
