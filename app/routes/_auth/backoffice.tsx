import { APP } from '@/lib/constants/app'
import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/backoffice')({
  beforeLoad: ({ context }) => {
    if (!context.auth?.userHasPermission(['admin'])) {
      throw redirect({ to: '/' })
    }
  },
  head: () => ({
    meta: [{ title: `Backoffice | ${APP.NAME}` }],
  }),
  component: BackofficeLayout,
})

function BackofficeLayout() {
  return (
    <div className="backoffice-layout">
      <div className="mb-4 rounded bg-red-100 p-2 text-red-800 dark:bg-red-900 dark:text-red-100">
        <h2 className="font-bold">Backoffice Area (Admin Role)</h2>
      </div>
      <Outlet />
    </div>
  )
}
