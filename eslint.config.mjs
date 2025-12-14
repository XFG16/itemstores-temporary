// eslint.config.mts (or .mjs)
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  // Next.js + React + hooks + Core Web Vitals
  ...nextVitals,

  // TypeScript rules
  ...nextTs,

  // Your overrides
  {
    rules: {
      "no-var": "off",

      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
        },
      ],
    },
  },

  // Ignores (include Next defaults + your scripts)
  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    "scripts/**",
    "hooks/useToast.ts",
  ]),
]);
