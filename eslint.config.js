import pluginQuery from '@tanstack/eslint-plugin-query'
import pluginRouter from '@tanstack/eslint-plugin-router'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import prettier from 'eslint-plugin-prettier'
import react from 'eslint-plugin-react'
import reactCompiler from 'eslint-plugin-react-compiler'
import reactHooks from 'eslint-plugin-react-hooks'
import globals from 'globals'

export default [
  {
    ignores: [
      '**/.github/**',
      '**/.vscode/**',
      '**/build/**',
      '**/dist/**',
      '**/node_modules/**',
      '**/public/**',
      '**/routeTree.gen.ts',
    ],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: typescriptParser,
    },
    plugins: {
      '@tanstack/query': pluginQuery,
      '@tanstack/router': pluginRouter,
      '@typescript-eslint': typescriptEslint,
      'react-compiler': reactCompiler,
      'react-hooks': reactHooks,
      prettier: prettier,
      react: react,
    },
    rules: {
      '@tanstack/query/no-rest-destructuring': 'warn',
      '@tanstack/query/stable-query-client': 'error',
      '@tanstack/router/create-route-property-order': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',
      'import/no-unresolved': 'off',
      'no-alert': 'error',
      'no-console': 'error',
      'no-unused-vars': ['warn', { args: 'none' }],
      'prettier/prettier': ['error', { endOfLine: 'auto' }, { usePrettierrc: true }],
      'react-compiler/react-compiler': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'error',
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
      'react/jsx-equals-spacing': ['error', 'never'],
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/jsx-fragments': ['error', 'syntax'],
      'react/jsx-indent': ['error', 2],
      'react/jsx-indent-props': ['error', 2],
      'react/jsx-key': 'error',
      'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
      'react/jsx-no-bind': [
        'error',
        {
          allowArrowFunctions: true,
          allowFunctions: true,
          allowBind: false,
          ignoreRefs: true,
        },
      ],
      'react/jsx-no-duplicate-props': ['error', { ignoreCase: false }],
      'react/jsx-no-target-blank': [
        'error',
        {
          allowReferrer: false,
          enforceDynamicLinks: 'always',
        },
      ],
      'react/jsx-no-undef': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-props-no-multi-spaces': 'error',
      'react/jsx-sort-default-props': ['error', { ignoreCase: true }],
      'react/jsx-sort-props': ['warn', { ignoreCase: true }],
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'react/no-array-index-key': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-find-dom-node': 'error',
      'react/no-is-mounted': 'error',
      'react/no-multi-comp': ['error', { ignoreStateless: true }],
      'react/no-render-return-value': 'error',
      'react/no-set-state': 'error',
      'react/no-string-refs': 'error',
      'react/no-typos': 'error',
      'react/no-unknown-property': 'error',
      'react/no-unsafe': 'error',
      'react/no-unused-prop-types': 'error',
      'react/no-unused-state': 'error',
      'react/no-will-update-set-state': 'error',
      'react/prefer-stateless-function': 'error',
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
  },
]
