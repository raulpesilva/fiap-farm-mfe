import { federation } from '@module-federation/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { dependencies } from './package.json';

export default defineConfig(() => {
  return {
    server: { fs: { allow: ['.', '../shared'] } },
    build: { target: 'chrome89' },
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
    ],
  };
});
