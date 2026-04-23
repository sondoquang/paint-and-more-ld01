import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import handlebars from 'vite-plugin-handlebars';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default {
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'partials'),
      reloadOnPartialChange: true,
    }),
  ],
  server: {
    port: 5173,
    open: true,
  },
};
