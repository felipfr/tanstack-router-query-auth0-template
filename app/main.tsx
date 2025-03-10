import { createRoot } from 'react-dom/client'
import { App } from './app'

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    readonly app: HTMLElement
  }
}

createRoot(window.app).render(<App />)
