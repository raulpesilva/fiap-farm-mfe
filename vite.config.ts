import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    build: { target: 'chrome89' },
    base: env.VITE_BASE_URL,
    server: {
      origin: env.VITE_BASE_URL,
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
          tailwindcss: {
            requiredVersion: dependencies.tailwindcss,
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
