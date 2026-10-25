import adapter from "@sveltejs/adapter-static"
import { sveltekit } from "@sveltejs/kit/vite"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, lazyPlugins } from "vite-plus"

export default defineConfig({
  fmt: {
    arrowParens: "always",
    bracketSameLine: false,
    bracketSpacing: true,
    embeddedLanguageFormatting: "auto",
    endOfLine: "lf",
    htmlWhitespaceSensitivity: "css",
    ignorePatterns: [".svelte-kit/**", "build/**", "node_modules/**", ".wrangler/**"],
    insertFinalNewline: true,
    jsxSingleQuote: false,
    objectWrap: "preserve",
    printWidth: 100,
    quoteProps: "as-needed",
    semi: false,
    singleAttributePerLine: false,
    singleQuote: false,
    sortImports: {
      newlinesBetween: true,
      partitionByComment: true,
      sortSideEffects: false,
    },
    sortPackageJson: {
      sortScripts: false,
    },
    sortTailwindcss: {
      stylesheet: "./src/routes/layout.css",
    },
    svelte: {
      allowShorthand: true,
      indentScriptAndStyle: true,
      sortOrder: "options-scripts-markup-styles",
    },
    tabWidth: 2,
    trailingComma: "all",
    useTabs: false,
  },

  lint: {
    ignorePatterns: ["worker-configuration.d.ts"],

    categories: {
      correctness: "error",
      nursery: "off",
      pedantic: "off",
      perf: "warn",
      restriction: "off",
      style: "off",
      suspicious: "error",
    },

    jsPlugins: [
      {
        name: "vite-plus",
        specifier: "vite-plus/oxlint-plugin",
      },
    ],

    options: {
      maxWarnings: 0,
      typeAware: true,
      typeCheck: true,
    },

    overrides: [
      {
        files: ["vite.config.ts", "scripts/**/*.{js,ts}", "**/*.config.{js,ts,mjs,mts}"],
        env: {
          node: true,
        },
        rules: {
          "no-console": "off",
        },
      },
      {
        files: ["src/**/*.{js,ts,svelte}"],
        env: {
          browser: true,
          svelte: true,
        },
        rules: {
          "import/no-unassigned-import": "off",
          "unicorn/no-empty-file": "off",
        },
      },
      {
        files: ["**/*.{test,spec}.{js,ts}"],
        plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "promise", "vitest"],
        rules: {
          "no-console": "off",
        },
      },
    ],

    plugins: ["eslint", "typescript", "unicorn", "oxc", "import", "promise"],

    rules: {
      eqeqeq: "error",
      "import/no-cycle": "warn",
      "no-alert": "error",
      "no-console": "warn",
      "no-debugger": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-new-func": "error",
      "no-var": "error",
      "prefer-const": "error",
      "promise/always-return": "off",
      "typescript/await-thenable": "error",
      "typescript/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      "typescript/no-explicit-any": "warn",
      "typescript/no-floating-promises": "error",
      "typescript/no-misused-promises": "error",
      "typescript/no-unnecessary-type-assertion": "warn",
      "unicorn/filename-case": "off",
      "unicorn/no-array-for-each": "off",
      "unicorn/prefer-node-protocol": "error",
      "vite-plus/prefer-vite-plus-imports": "error",
    },
  },

  plugins: lazyPlugins(() => [
    tailwindcss(),
    sveltekit({
      compilerOptions: {
        runes: ({ filename }) =>
          filename.split(/[/\\]/).includes("node_modules") ? undefined : true,
      },
      adapter: adapter({
        pages: "build",
        assets: "build",
        fallback: "index.html",
      }),
    }),
  ]),

  staged: {
    "*": "vp check --fix",
  },
})
