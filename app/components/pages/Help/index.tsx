import { helpItemsQueryOptions } from '@/routes/_auth/_help/help'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, Outlet } from '@tanstack/react-router'

export function Help() {
  const helpItemsQuery = useSuspenseQuery(helpItemsQueryOptions)
  const items = helpItemsQuery.data

  return (
    <div>
      <h2 className="mb-4 text-xl font-bold">Help</h2>
      <div className="flex gap-2 p-2">
        <ul className="list-disc pl-4">
          {items.map((item) => (
            <li className="whitespace-nowrap" key={item.id}>
              <Link
                activeProps={{ className: 'font-bold underline' }}
                className="block py-1 text-blue-600 hover:opacity-75"
                params={{
                  helpId: item.id,
                }}
                to="/help/$helpId"
              >
                <div>{item.title.substring(0, 20)}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 pl-8">
        <Outlet />
      </div>
    </div>
  )
}

export default Help
