import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  // Next.js + React + hooks + Core Web Vitals (flat config)
  ...nextVitals,

  // TypeScript (flat config)
  ...nextTs,

  // Désactive les règles ESLint qui entrent en conflit avec Prettier
  prettier,

  // Dossiers/fichiers à ignorer (équivalent flat de .eslintignore)
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
