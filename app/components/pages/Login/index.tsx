import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useAuth } from '@/lib/hooks/useAuth'
import { LogIn } from 'lucide-react'

function Login() {
  const { login } = useAuth()

  return (
    <div className="flex h-screen w-full">
      <div className="hidden w-1/2 flex-col justify-between bg-black p-12 lg:flex">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold text-white">AppName</h1>
          <p className="text-gray-400">Your modern app solution</p>
        </div>

        <div className="mb-8">
          <img alt="Logo" className="mr-2 h-16 w-16" src="/logo.png" />
          <p className="mt-6 max-w-md text-gray-400">
            "Transform your workflow with our intuitive platform designed for modern teams."
          </p>
          <p className="mt-4 text-sm text-gray-500">© 2025 AppName. All rights reserved.</p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center bg-white p-8 lg:w-1/2">
        <Card className="w-full max-w-md border-none bg-transparent shadow-none">
          <div className="mb-8 flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome back</h1>
            <p className="text-gray-500">Sign in to continue to your account</p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-6">
            <Button
              className="group relative w-full overflow-hidden border-0 bg-black text-white"
              onClick={login}
              size="lg"
            >
              <span className="relative z-10 flex items-center justify-center">
                <LogIn className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                Sign in with Auth0
              </span>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Login
