import Home from '@/components/pages/Home'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/_home/')({ component: Home })
