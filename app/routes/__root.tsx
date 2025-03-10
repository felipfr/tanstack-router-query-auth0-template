import { NotFound } from '@/components/pages/NotFound'
import { DefaultCatchBoundary } from '@/components/shared/DefaultCatchBoundary'
import { SidebarProvider } from '@/components/ui/sidebar'
import type { RouterContext } from '@/lib/config/router'
import { APP } from '@/lib/constants/app'
import { seo } from '@/lib/utils'
import appCss from '@/styles/app.css?url'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  HeadContent,
  Outlet,
  ReactNode,
  Scripts,
  createRootRouteWithContext,
  useRouterState,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Toaster } from 'sonner'

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  const { location } = useRouterState()
  const isLoginPage = location.pathname === '/login'
  const mainClass = 'min-h-screen w-full bg-background text-foreground antialiased'
  const MainContent = <main className={mainClass}>{children}</main>

  return (
    <>
      <HeadContent />
      {isLoginPage ? MainContent : <SidebarProvider>{MainContent}</SidebarProvider>}
      <Scripts />
      <Toaster />
      {import.meta.env.MODE === 'development' && (
        <>
          <ReactQueryDevtools buttonPosition="bottom-right" />
          <TanStackRouterDevtools position="bottom-right" />
        </>
      )}
    </>
  )
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: 'utf-8', lang: 'en' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...seo({ title: `Home | ${APP.NAME}`, description: APP.DESCRIPTION }),
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    )
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
})
