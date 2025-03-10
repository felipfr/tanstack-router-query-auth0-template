# TanStack Router Query Auth0 Template

A modern React application using TanStack Router and other cutting-edge technologies.

## Features

- ⚡ [Vite](https://vite.dev/) - Extremely fast build tool and development server
- 📦 [React 19](https://react.dev/) - With React Compiler for optimized performance
- 🔒 [Auth0](https://auth0.com/) - Complete authentication and authorization with Role-Based Access Control (RBAC)
- 🚀 [TanStack Router](https://tanstack.com/router/latest) - File-based routing with built-in data loading
- 🔍 [TanStack Query](https://tanstack.com/query/latest) - Efficient server state management
- 🎨 [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- 🔬 [React Scan](https://react-scan.com/) - Performance analysis and optimization tool
- 🌐 [Jotai](https://jotai.org/) - Atomic and simple state management
- 🧩 [shadcn/ui](https://ui.shadcn.com/) - Re-usable components built with Radix UI and Tailwind
- 🔔 [Sonner](https://sonner.emilkowal.ski/) - Elegant notification system
- 🎭 [Lucide Icons](https://lucide.dev/) - Beautiful & consistent icon toolkit
- 🌙 Light/Dark Mode with [next-themes](https://github.com/pacocoursey/next-themes)

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/felipfr/tanstack-router-query-auth0-template.git
cd tanstack-router-query-auth0-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.local.example .env.local
```

Edit the .env.local file with your settings.

4. Start the development server:

```bash
npm run start:dev
# or
yarn start:dev
# or
pnpm start:dev
```

5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Project Structure

```plaintext
app/
├── app.tsx          # Root application component
├── main.tsx         # Application entry point
├── components/      # Reusable components
│   ├── pages/       # Page-specific components
│   ├── shared/      # Shared components
│   ├── theme-toggle.tsx # Theme toggler
│   └── ui/          # UI components (based on shadcn/ui)
├── lib/             # Utility functions and logic
│   ├── config/      # Configurations (router, query, etc)
│   ├── constants/   # Application constants
│   ├── hooks/       # Custom hooks
│   ├── store/       # Global state (Jotai)
│   ├── types/       # Type definitions
│   └── utils/       # Utility functions
├── routes/          # Application routes (TanStack Router)
└── styles/          # Global styles
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing
If you have suggestions or improvements, feel free to open an issue or submit a pull request. Contributions are welcome!

⭐ Like this template? Don't forget to give it a star on GitHub! ⭐
