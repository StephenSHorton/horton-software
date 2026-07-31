import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// GitHub project pages: https://stephenshorton.github.io/horton-software/
// Override with VITE_BASE=/ for local root or a custom domain.
const base = process.env.VITE_BASE ?? "/horton-software/";

// https://vite.dev/config/
export default defineConfig({
	base,
	plugins: [
		tanstackRouter({
			target: "react",
			autoCodeSplitting: true,
		}),
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		tailwindcss(),
	],
	resolve: {
		alias: {
			"@": path.resolve(rootDir, "./src"),
		},
	},
});
