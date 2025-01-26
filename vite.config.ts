import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    ...configDefaults,
    environment: "jsdom",
    globals: true,
    setupFiles: "./setupTests.ts", // Si usas un archivo de configuración
  },
});
