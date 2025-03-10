import { routeTree } from '@/routeTree.gen'
import { createRouter } from '@tanstack/react-router'
import { queryClient } from '../query'

import type { AuthContext } from '@/lib/types/auth'
import type { QueryClient } from '@tanstack/react-query'

type RouterContext = {
  queryClient: QueryClient
  auth?: AuthContext
}

const router = createRouter({
  routeTree,
  context: { queryClient, auth: undefined },
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
})

declare module '@tanstack/react-router' {
  // eslint-disable-next-line no-unused-vars
  interface Register {
    router: ReturnType<typeof createRouter>
  }
}

export { router }
export type { RouterContext }
