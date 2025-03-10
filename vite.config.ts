/// <reference types="vite/client" />

import tailwindcss from '@tailwindcss/vite'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      target: 'react',
      autoCodeSplitting: true,
      routesDirectory: './app/routes',
      generatedRouteTree: './app/routeTree.gen.ts',
      routeFileIgnorePrefix: '-',
      quoteStyle: 'single',
    }),
    tailwindcss(),
    react({ babel: { plugins: [['babel-plugin-react-compiler', { target: '19' }]] } }),
    tsConfigPaths({ projects: ['./tsconfig.json'] }),
  ],
  server: { port: 3000 },
})
