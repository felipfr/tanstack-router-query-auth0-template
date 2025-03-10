import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/backoffice/settings/')({
  head: () => ({
    meta: [{ title: `Settings | Backoffice` }],
  }),
  component: BackofficeSettingsComponent,
})

function BackofficeSettingsComponent() {
  return <h2 className="mb-4 text-xl font-bold">Backoffice Settings</h2>
}
