import { Link } from '@tanstack/react-router'

export function NotFound() {
  return (
    <div className="space-y-2 p-2">
      <div className="text-gray-600 dark:text-gray-400">
        <p>A página que você procura, não existe.</p>
      </div>
      <p className="flex flex-wrap items-center gap-2">
        <button
          className="rounded bg-emerald-500 px-2 py-1 text-sm font-black text-white uppercase"
          onClick={() => window.history.back()}
          type="button"
        >
          Voltar
        </button>
        <Link className="rounded bg-cyan-600 px-2 py-1 text-sm font-black text-white uppercase" to="/home">
          Home
        </Link>
      </p>
    </div>
  )
}
