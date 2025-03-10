import type { User } from '@auth0/auth0-react'

export type AuthContext = {
  /**
   * Checks if the user has one of the specified roles
   * @param roles Array of roles to check
   */
  userHasPermission: (roles: string[]) => boolean

  /**
   * Indicates whether the user is authenticated
   */
  isAuthenticated: boolean

  /**
   * Indicates if the authentication process is loading
   */
  isLoading: boolean

  /**
   * Initiates the login process with redirection
   */
  login: () => void

  /**
   * Logs the user out
   */
  logout: () => void

  /**
   * Authenticated user information
   */
  user: User | undefined
}
