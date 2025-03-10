import HelpItem from '@/components/pages/Help/components/HelpItem'
import { HelpItemType } from '@/lib/types/help-item'
import { queryOptions } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import axios from 'axios'
import { toast } from 'sonner'

export const Route = createFileRoute('/_auth/_help/help/$helpId')({
  loader: ({ context: { queryClient }, params: { helpId } }) => {
    return queryClient.ensureQueryData(helpItemQueryOptions(helpId))
  },
  component: HelpItem,
})

export const helpItemQueryOptions = (helpId: string) =>
  queryOptions({
    queryKey: ['helpItems', { helpId }],
    queryFn: () => fetchHelpItem(helpId),
  })

const fetchHelpItem = async (helpId: string) => {
  try {
    await new Promise((r) => setTimeout(r, 500))
    const { data } = await axios.get<HelpItemType>(`https://jsonplaceholder.typicode.com/posts/${helpId}`)
    return data
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      toast.error('Help item not found', {
        description: `The help item with ID "${helpId}" could not be found.`,
      })
      throw new Error(`Help item with id "${helpId}" not found!`)
    }
    toast.error('Failed to fetch help item', {
      description: 'Please try again later or contact support if the problem persists.',
    })
    throw error
  }
}
