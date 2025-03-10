import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'

export interface NavItemProps {
  href: string
  icon: React.ReactNode
  title: string
  onClick?: () => void
  className?: string
}

export function NavItem({ href, icon, title, onClick, className }: Readonly<NavItemProps>) {
  return (
    <Link activeOptions={{ exact: true }} className={cn('block w-full', className)} onClick={onClick} to={href}>
      {({ isActive }) => (
        <div
          className={cn(
            'relative flex items-center gap-2 rounded-md px-3 py-2 transition-colors',
            'hover:bg-muted',
            isActive ? 'text-primary font-bold' : 'text-muted-foreground hover:bg-muted/60 font-normal',
          )}
        >
          <span className={cn('', isActive && 'text-foreground')}>{icon}</span>
          <span className={cn('', isActive && 'text-foreground')}>{title}</span>
        </div>
      )}
    </Link>
  )
}
