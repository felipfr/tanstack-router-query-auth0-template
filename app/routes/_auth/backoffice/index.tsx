import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/backoffice/')({
  component: BackofficeHomeComponent,
})

function BackofficeHomeComponent() {
  return <h2 className="mb-4 text-xl font-bold">Backoffice Home</h2>
}
