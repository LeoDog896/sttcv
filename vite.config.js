import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: "./",
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, 'src/component/index.ts'),
      name: 'MyLib',
      fileName: (format) => `sttcv.${format}.js`
    },
  }
});
