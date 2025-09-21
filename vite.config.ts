import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => {
  return {
    build: { target: 'chrome89' },
    base: 'https://fiap-farm-mfe.raulpesilva.com',
    server: {
      origin: 'https://fiap-farm-mfe.raulpesilva.com',
    },
    plugins: [
      federation({
        filename: 'remoteEntry.js',
        name: 'remote',
        exposes: { './fiap-farm-mfe': './export/index.tsx' },
        remotes: {},
        shared: {
          react: {
            requiredVersion: dependencies.react,
            singleton: true,
          },
          '@raulpesilva/re-state': {
            requiredVersion: dependencies['@raulpesilva/re-state'],
            singleton: true,
          },
        },

      }),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
