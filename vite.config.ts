import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import AutoImport from 'unplugin-auto-import/vite';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    AutoImport({
      imports: ['react'],
      dts: 'src/@types/react/auto-imports.d.ts',
    }),
  ],
});
