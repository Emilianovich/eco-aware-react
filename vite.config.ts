import tailwindcss from "@tailwindcss/vite"
import { tanstackRouter } from "@tanstack/router-plugin/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite-plus"

export default defineConfig({
  plugins: [
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react({ compiler: false }),
    tailwindcss(),
  ],
  build: {
    outDir: "build",
  },
  fmt: {
    semi: false,
    singleQuote: false,
    jsxSingleQuote: false,
    sortTailwindcss: {
      stylesheet: "./src/styles.css",
    },
    ignorePatterns: ["build/**", ".wrangler/**", "src/routeTree.gen.ts"],
  },
  lint: {
    plugins: ["typescript", "unicorn", "oxc", "react", "jsx-a11y"],
    rules: {
      "react/rules-of-hooks": "error",
      "react/exhaustive-deps": "error",
      "react/jsx-key": "error",
      "react/jsx-no-duplicate-props": "error",
    },
    ignorePatterns: ["src/routeTree.gen.ts"],
    options: {
      typeAware: true,
      typeCheck: true,
    },
  },
  test: {
    passWithNoTests: true,
  },
  staged: {
    "*": "vp check --fix",
  },
})
