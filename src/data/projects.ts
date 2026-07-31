export type Project = {
	name: string;
	tagline: string;
	description: string;
	tags: string[];
	repo: string;
	href?: string;
	/** Path under public/, e.g. /project-icons/toru.png */
	icon?: string;
	featured?: boolean;
};

/** Curated public work for the company site showcase. */
export const projects: Project[] = [
	{
		name: "Wind Waker Multiplayer",
		tagline: "Real-time co-op on Dolphin",
		description:
			"Live visual multiplayer for The Legend of Zelda: The Wind Waker — Go TUI, TCP networking, and PowerPC code injection.",
		tags: ["Go", "Games", "Emulation"],
		repo: "https://github.com/StephenSHorton/ww-multiplayer",
		icon: "/project-icons/ww-multiplayer.png",
		featured: true,
	},
	{
		name: "s&box MCP",
		tagline: "AI in the game editor",
		description:
			"Model Context Protocol server for the s&box editor — scene manipulation, code execution, and automation for coding agents.",
		tags: ["C#", "Games", "MCP"],
		repo: "https://github.com/StephenSHorton/sbox-mcp",
		icon: "/project-icons/sbox-mcp.png",
		featured: true,
	},
	{
		name: "WC3 Forge",
		tagline: "Agent-driven map editor",
		description:
			"Warcraft III map editor designed to be driven by Claude as much as by hand — Go + Svelte in a single Wails binary with embedded MCP.",
		tags: ["Go", "Games", "MCP"],
		repo: "https://github.com/StephenSHorton/wc3-forge",
		href: "https://stephenshorton.github.io/wc3-forge/",
		icon: "/project-icons/wc3-forge.png",
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
		icon: "/project-icons/chrome-ref-drop.svg",
		featured: true,
	},
	{
		name: "Hato",
		tagline: "A carrier pigeon for files",
		description:
			"Fast peer-to-peer file transfer over iroh — free, local-first, and nicer than the usual sendme-style CLI.",
		tags: ["Rust", "P2P", "iroh"],
		repo: "https://github.com/StephenSHorton/hato",
		icon: "/project-icons/hato.svg",
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
		icon: "/project-icons/toru.png",
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
		icon: "/project-icons/aizuchi.png",
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
		icon: "/project-icons/mead.png",
	},
	{
		name: "尖塔工房 (Sentou Koubou)",
		tagline: "Slay the Spire 2 mods",
		description:
			"Monorepo for Slay the Spire 2 mods — characters, content, and tooling.",
		tags: ["C#", "Games", "Mods"],
		repo: "https://github.com/StephenSHorton/sentou-koubou",
	},
	{
		name: "BAR Annihilation",
		tagline: "RTS control for PA: Titans",
		description:
			"Beyond All Reason–style unit control for Planetary Annihilation: TITANS — smart selection, grid build, area commands, formations.",
		tags: ["Games", "RTS", "Mods"],
		repo: "https://github.com/StephenSHorton/bar-annihilation",
	},
];
