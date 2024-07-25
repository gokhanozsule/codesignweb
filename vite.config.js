import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: {
      VITE_CLOUDINARY_CLOUD_NAME: JSON.stringify(
        env.VITE_CLOUDINARY_CLOUD_NAME
      ),
    },
    plugins: [react()],
    base: env.VITE_BASE_URL || "/",
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "index.html"),
        },
      },
      outDir: "dist",
    },
  };
});
