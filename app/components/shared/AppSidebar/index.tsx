import ThemeToggle from '@/components/theme-toggle'
import { NavItem, NavItemProps } from '@/components/ui/nav-item'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { useAuth } from '@/lib/hooks/useAuth'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@radix-ui/react-collapsible'
import { ChevronDown, HelpCircle, Home, LogOut, Settings, Users } from 'lucide-react'

export function AppSidebar() {
  const { user, logout, userHasPermission } = useAuth()
  const canViewBackoffice = userHasPermission(['admin'])

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center p-4">
          <img alt="Logo" className="mr-2 h-8 w-8" src="/logo.png" />
          <h1 className="text-lg font-bold">Template App</h1>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavGroup items={publicItems} title="Application" />
        {canViewBackoffice && <NavGroup items={backofficeItems} title="Backoffice" />}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="flex flex-col gap-4">
          {user && (
            <button
              className="hover:bg-muted flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors"
              onClick={logout}
            >
              <LogOut size={16} />
              <span className="text-sm font-medium">Logout</span>
            </button>
          )}
          <div className="flex items-center justify-between border-t pt-2">
            <div className="flex items-center gap-2">
              {user?.picture && <img alt={user.name} className="h-8 w-8 rounded-full" src={user.picture} />}
              <div className="flex flex-col">
                <span className="text-sm font-medium">{user?.name}</span>
                <span className="text-muted-foreground text-xs">{user?.email}</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

const publicItems = [
  { title: 'Home', href: '/', icon: <Home size={16} /> },
  { title: 'Help', href: '/help', icon: <HelpCircle size={16} /> },
]

const backofficeItems = [
  { title: 'Backoffice', href: '/backoffice', icon: <Users size={16} /> },
  { title: 'Settings', href: '/backoffice/settings', icon: <Settings size={16} /> },
]

interface NavGroupProps {
  title: string
  items: NavItemProps[]
}

function NavGroup({ title, items }: Readonly<NavGroupProps>) {
  return (
    <SidebarGroup>
      <Collapsible className="group/collapsible" defaultOpen>
        <SidebarGroupLabel asChild>
          <CollapsibleTrigger className="flex w-full cursor-pointer items-center justify-between">
            <span>{title}</span>
            <ChevronDown className="transition-transform group-data-[state=open]/collapsible:rotate-180" />
          </CollapsibleTrigger>
        </SidebarGroupLabel>
        <CollapsibleContent>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem className="w-full" key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavItem href={item.href} icon={item.icon} title={item.title} />
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </CollapsibleContent>
      </Collapsible>
    </SidebarGroup>
  )
}
