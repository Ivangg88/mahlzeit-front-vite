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
    setupFiles: "./setupTests.ts",
    coverage: {
      include: ["src/**/*"],
      reporter: ["text", "json", "html"],
      exclude: ["src/main.tsx", "src/styles/*", "src/vite-env.d.ts"],
    },
  },
});
