export type Project = {
	name: string;
	tagline: string;
	description: string;
	tags: string[];
	repo: string;
	href?: string;
	featured?: boolean;
};

/** Curated public work for the company site showcase. */
export const projects: Project[] = [
	{
		name: "Wind Waker Multiplayer",
		tagline: "Real-time co-op on Dolphin",
		description:
			"Live visual multiplayer for The Legend of Zelda: The Wind Waker — Go TUI, TCP networking, and PowerPC code injection.",
		tags: ["Go", "Emulation", "Networking"],
		repo: "https://github.com/StephenSHorton/ww-multiplayer",
		featured: true,
	},
	{
		name: "s&box MCP",
		tagline: "AI in the game editor",
		description:
			"Model Context Protocol server for the s&box editor — scene manipulation, code execution, and automation for coding agents.",
		tags: ["C#", "MCP", "Game tools"],
		repo: "https://github.com/StephenSHorton/sbox-mcp",
		featured: true,
	},
	{
		name: "WC3 Forge",
		tagline: "Agent-driven map editor",
		description:
			"Warcraft III map editor designed to be driven by Claude as much as by hand — Go + Svelte in a single Wails binary with embedded MCP.",
		tags: ["Go", "Wails", "MCP"],
		repo: "https://github.com/StephenSHorton/wc3-forge",
		href: "https://stephenshorton.github.io/wc3-forge/",
		featured: true,
	},
	{
		name: "Chrome Reference Drop",
		tagline: "Browser → Blender references",
		description:
			"Blender add-on that pastes or drops browser images as reference empties. Drag-and-drop install from the GitHub Pages site.",
		tags: ["Python", "Blender", "Tooling"],
		repo: "https://github.com/StephenSHorton/chrome-ref-drop",
		href: "https://stephenshorton.github.io/chrome-ref-drop/",
		featured: true,
	},
	{
		name: "Hato",
		tagline: "A carrier pigeon for files",
		description:
			"Fast peer-to-peer file transfer over iroh — free, local-first, and nicer than the usual sendme-style CLI.",
		tags: ["Rust", "P2P", "iroh"],
		repo: "https://github.com/StephenSHorton/hato",
		featured: true,
	},
	{
		name: "Toru",
		tagline: "Screenshot & record for Windows",
		description:
			"macOS-style screenshot and screen recording on Windows — Wails v3, Go, and React 19.",
		tags: ["Go", "Wails", "Desktop"],
		repo: "https://github.com/StephenSHorton/toru",
		href: "https://stephenshorton.github.io/toru/",
		featured: true,
	},
	{
		name: "Aizuchi",
		tagline: "Scratch pad with MCP",
		description:
			"Desktop notes app with an MCP server so Claude Code can read and write alongside you.",
		tags: ["TypeScript", "MCP", "Desktop"],
		repo: "https://github.com/StephenSHorton/aizuchi",
		href: "https://aizuchi.tools",
	},
	{
		name: "Kussetsu",
		tagline: "React → WebGPU UI",
		description:
			"GPU-rendered UI framework — write React, WebGPU paints every pixel, DOM stays an invisible a11y + input layer.",
		tags: ["TypeScript", "WebGPU", "React"],
		repo: "https://github.com/StephenSHorton/kussetsu",
		href: "https://stephenshorton.github.io/kussetsu/",
	},
	{
		name: "Mead",
		tagline: "Agent-driven Wine bottles",
		description:
			"Wine bottle manager for macOS, built to be driven by Claude Code — Go + Svelte Wails app with embedded MCP.",
		tags: ["Go", "macOS", "MCP"],
		repo: "https://github.com/StephenSHorton/mead",
	},
	{
		name: "Navigate",
		tagline: "Pathfinding for roblox-ts",
		description:
			"Composable TypeScript-native pathfinding suite for roblox-ts projects.",
		tags: ["TypeScript", "Roblox", "npm"],
		repo: "https://github.com/StephenSHorton/navigate",
		href: "https://www.npmjs.com/package/@rbxts/navigate",
	},
	{
		name: "Immersive Portals",
		tagline: "Portal rendering for roblox-ts",
		description:
			"TypeScript-native immersive portal rendering library for roblox-ts.",
		tags: ["TypeScript", "Roblox", "Graphics"],
		repo: "https://github.com/StephenSHorton/immersive-portals",
		href: "https://www.npmjs.com/package/@rbxts/immersive-portals",
	},
	{
		name: "尖塔工房 (Sentou Koubou)",
		tagline: "Slay the Spire 2 mods",
		description:
			"Monorepo for Slay the Spire 2 mods — characters, content, and tooling.",
		tags: ["C#", "Game mods"],
		repo: "https://github.com/StephenSHorton/sentou-koubou",
	},
];
