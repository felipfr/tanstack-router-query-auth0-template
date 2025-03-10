import { helpItemQueryOptions } from '@/routes/_auth/_help/help.$helpId'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useParams } from '@tanstack/react-router'

function HelpItem() {
  const { helpId } = useParams({ strict: false })
  const { data: item } = useSuspenseQuery(helpItemQueryOptions(helpId))

  return (
    <div className="rounded-md bg-white p-4 dark:bg-slate-800">
      <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
      <p className="text-gray-700 dark:text-gray-300">{item.body}</p>
    </div>
  )
}

export default HelpItem
