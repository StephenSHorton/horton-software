import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

// Apex/custom domain (hortonsoftware.com) serves at site root.
// Project-pages path still works if you set VITE_BASE=/horton-software/ in CI.
const base = process.env.VITE_BASE ?? "/";

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
