import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <Button
      aria-label="Change Theme"
      className="cursor-pointer rounded-md"
      onClick={toggleTheme}
      size="icon"
      variant="ghost"
    >
      <Sun aria-hidden="true" className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
      <Moon
        aria-hidden="true"
        className="absolute h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
      />
      <span className="sr-only">Change Theme</span>
    </Button>
  )
}
