export type CategoryId = "agents" | "apps" | "games" | "libraries";

export type Project = {
	name: string;
	/** Name in its own script, shown beside the romanized name. */
	native?: string;
	tagline: string;
	description: string;
	category: CategoryId;
	/** Canonical names from `techGroups`; the first few show on the card. */
	tech: string[];
	platforms: string[];
	repo: string;
	/** Product or docs site, when one is live. */
	href?: string;
	/** Path under public/, e.g. /project-icons/toru.png */
	icon?: string;
	/** Line-art icons need breathing room inside the tile. */
	iconPad?: boolean;
	featured?: boolean;
	/** Two or three checkable facts, shown on featured cards. */
	highlights?: string[];
};

export const categories: { id: CategoryId; title: string; blurb: string }[] = [
	{
		id: "agents",
		title: "Agent tooling",
		blurb: "Software that coding agents and people drive together.",
	},
	{
		id: "apps",
		title: "Apps & interfaces",
		blurb: "Desktop apps, web tools and the UI work under them.",
	},
	{
		id: "games",
		title: "Games & mods",
		blurb: "Multiplayer, editors and mods for games we play.",
	},
	{
		id: "libraries",
		title: "Libraries",
		blurb: "Pieces pulled out of the apps so other projects can use them.",
	},
];

const gh = (name: string) => `https://github.com/StephenSHorton/${name}`;
const pages = (name: string) => `https://stephenshorton.github.io/${name}/`;

/** Public work only. Private, archived and forked repositories stay off the site. */
export const projects: Project[] = [
	{
		name: "Irori",
		native: "囲炉裏",
		tagline: "A hearth for your coding agents",
		description:
			"A local-first hub where coding agents on all your devices share context, message and wake each other, and track work on cards. Devices pair as equals, and no server holds the data.",
		category: "agents",
		tech: [
			"Rust",
			"Tauri",
			"React",
			"iroh",
			"SQLite",
			"Whisper",
			"MCP",
			"TypeScript",
			"Tailwind",
			"Bun",
		],
		platforms: ["Windows", "macOS", "Android"],
		repo: gh("irori"),
		href: pages("irori"),
		icon: "/project-icons/irori.svg",
		featured: true,
		highlights: [
			"A message can wake an idle Claude Code session",
			"Voice input runs Whisper on the device",
			"Every device holds the whole history",
		],
	},
	{
		name: "suzuri",
		native: "硯",
		tagline: "A terminal with an input bar",
		description:
			"A terminal app for macOS and Windows with tabs and split panes. Each pane runs a shell with an editable input bar, Tab completion from files and history, and marks that show when an agent is working or waiting on you.",
		category: "apps",
		tech: ["Rust", "Tauri", "React", "libghostty", "JavaScript"],
		platforms: ["macOS", "Windows"],
		repo: gh("suzuri"),
		href: pages("suzuri"),
		icon: "/project-icons/suzuri.png",
		featured: true,
		highlights: [
			"Rust terminal core on libghostty-vt",
			"Only changed rows are sent to the canvas renderer",
			"Up to 16 tabs and 24 panes",
		],
	},
	{
		name: "Toru",
		native: "撮る",
		tagline: "macOS-style capture for Windows 11",
		description:
			"Screenshots and screen recording behind Win+Shift+S, plus instant replay, game clips, an annotation editor and a library. It also sends files peer to peer and sets up a virtual LAN for friends.",
		category: "apps",
		tech: [
			"Go",
			"Wails",
			"React",
			"FFmpeg",
			"WebRTC",
			"WireGuard",
			"MQTT",
			"MCP",
			"TypeScript",
			"Tailwind",
			"Bun",
		],
		platforms: ["Windows"],
		repo: gh("toru"),
		href: pages("toru"),
		icon: "/project-icons/toru.png",
		featured: true,
		highlights: [
			"Instant replay keeps the last few minutes ready to clip",
			"Game, voice chat and microphone record as separate sources",
			"File transfer uses a short spoken code",
		],
	},
	{
		name: "Wind Waker Multiplayer",
		tagline: "Co-op Wind Waker on Dolphin",
		description:
			"Each player runs their own copy of The Wind Waker on Dolphin and sees the other players' Links with real animations and tunic colors. A lobby with join codes and LAN discovery, shared enemies, and optional worlds with shared progress.",
		category: "games",
		tech: [
			"Go",
			"Wails",
			"C",
			"PowerPC injection",
			"Bubble Tea",
			"JavaScript",
			"Python",
		],
		platforms: ["Windows", "macOS"],
		repo: gh("ww-multiplayer"),
		href: pages("ww-multiplayer"),
		icon: "/project-icons/ww-multiplayer.png",
		featured: true,
		highlights: [
			"Patches your own disc image and leaves the original unchanged",
			"C code patched into the game's own executable",
			"Multiplayer and co-op are mods on its own modding API",
		],
	},
	{
		name: "wc3-forge",
		tagline: "A Warcraft III map editor with MCP built in",
		description:
			"A native map editor where the GUI and Claude Code drive the same session and share one undo stack. It edits units, doodads, terrain, object definitions and triggers, and saves packaged maps in place.",
		category: "agents",
		tech: ["Go", "Wails", "Svelte", "MCP", "WebGL", "TypeScript", "Tailwind"],
		platforms: ["Windows"],
		repo: gh("wc3-forge"),
		href: pages("wc3-forge"),
		icon: "/project-icons/wc3-forge.png",
		featured: true,
		highlights: [
			"More than 150 MCP tools in one binary",
			"Ctrl+Z in the editor undoes the agent's edits too",
			"Trigger editor with GUI-to-Lua and JASS codegen",
		],
	},
	{
		name: "Pipeline",
		tagline: "Picture to game asset, on your Mac",
		description:
			"A local image-to-3D and 2D asset pipeline for Apple Silicon. It turns a picture or a prompt into a meshed and painted model (rigged for characters), a sprite stack, a PS1-style low-poly model or a 2D sprite, with no cloud service.",
		category: "apps",
		tech: [
			"Python",
			"MLX",
			"Go",
			"Wails",
			"React",
			"three.js",
			"Blender",
			"TypeScript",
			"Tailwind",
		],
		platforms: ["macOS"],
		repo: gh("pipeline"),
		icon: "/project-icons/pipeline.png",
		featured: true,
		highlights: [
			"Ten passes from background removal to sprite stack",
			"Level-of-detail targets at 80k, 12k and 2k triangles",
			"Shape and paint run on MLX, on the device",
		],
	},
	{
		name: "Rock",
		tagline: "AI coding CLI in Go",
		description:
			"A fullscreen Charm TUI, a headless mode, ACP on stdio and a loopback HTTP API, all on one harness. Powered by Jev.",
		category: "agents",
		tech: ["Go", "Bubble Tea", "ACP", "MCP"],
		platforms: ["macOS", "Linux", "Windows"],
		repo: gh("rock"),
		href: pages("rock"),
		icon: "/project-icons/rock.svg",
	},
	{
		name: "Tsukumo",
		native: "付喪神",
		tagline: "A Discord bot for your agents",
		description:
			"An MCP server and a Claude Code mod. Agents read and post in Discord, and in Claude Code an @mention wakes the session that should answer. Nothing to deploy.",
		category: "agents",
		tech: ["TypeScript", "Bun", "MCP"],
		platforms: ["Any MCP client", "Claude Code"],
		repo: gh("tsukumo"),
		icon: "/project-icons/tsukumo.png",
	},
	{
		name: "Aizuchi",
		tagline: "Live mind-maps of your meetings",
		description:
			"A desktop app where an AI maps the conversation as you talk: questions, decisions and action items. It also holds a scratch pad with an MCP server for Claude Code.",
		category: "agents",
		tech: [
			"Rust",
			"Tauri",
			"React",
			"Whisper",
			"MCP",
			"TypeScript",
			"Tailwind",
			"Bun",
		],
		platforms: ["macOS", "Windows", "Linux"],
		repo: gh("aizuchi"),
		href: "https://aizuchi.tools",
		icon: "/project-icons/aizuchi.png",
	},
	{
		name: "Kussetsu",
		tagline: "React in, WebGPU out",
		description:
			"Write the interface in React and a custom renderer paints every pixel with WebGPU. The DOM stays as an invisible layer for accessibility and input.",
		category: "apps",
		tech: ["TypeScript", "React", "WebGPU", "Rust"],
		platforms: ["Web"],
		repo: gh("kussetsu"),
		href: pages("kussetsu"),
	},
	{
		name: "Mokei",
		native: "模型",
		tagline: "A clay-diorama design system",
		description:
			"A shadcn component registry, a theme and a 3D scene kit, with a playable warehouse-yard demo.",
		category: "apps",
		tech: ["TypeScript", "React", "three.js", "Tailwind"],
		platforms: ["Web"],
		repo: gh("mokei"),
		href: pages("mokei"),
		icon: "/project-icons/mokei.svg",
	},
	{
		name: "Mimu",
		native: "ミーム",
		tagline: "A GIF text editor in the browser",
		description:
			"Time text and emoji captions to a GIF's frames and download the result. No account, and the file never leaves your browser.",
		category: "apps",
		tech: ["TypeScript", "React", "Tailwind"],
		platforms: ["Web"],
		repo: gh("mimu"),
		href: pages("mimu"),
		icon: "/project-icons/mimu.svg",
	},
	{
		name: "Chrome Reference Drop",
		tagline: "Browser images into Blender",
		description:
			"A Blender add-on that pastes an image URL, or on Windows a copied browser image, as a reference in the 3D View. It installs by dragging a link into Blender.",
		category: "apps",
		tech: ["Python", "Blender"],
		platforms: ["Blender 4.2+"],
		repo: gh("chrome-ref-drop"),
		href: pages("chrome-ref-drop"),
		icon: "/project-icons/chrome-ref-drop.svg",
		iconPad: true,
	},
	{
		name: "PITT Multiplayer",
		tagline: "Steam co-op for Project P.I.T.T.",
		description:
			"An unofficial co-op mod: friends-only lobbies for up to 10 players in one shared world run by the host. Built on PittAPI, a mod loader in the same repo.",
		category: "games",
		tech: ["GDScript", "Godot", "Steam networking"],
		platforms: ["Windows"],
		repo: gh("pitt-multiplayer"),
		href: pages("pitt-multiplayer"),
	},
	{
		name: "Sentou Koubou",
		native: "尖塔工房",
		tagline: "Slay the Spire 2 mods",
		description:
			"A workshop of Slay the Spire 2 mods: playable characters, multiplayer fixes and quality-of-life mods, each released on its own.",
		category: "games",
		tech: ["C#", "Godot", "Harmony", "Python"],
		platforms: ["Windows"],
		repo: gh("sentou-koubou"),
		href: pages("sentou-koubou"),
	},
	{
		name: "BAR Annihilation",
		tagline: "BAR-style control for PA: TITANS",
		description:
			"A client-side mod that brings Beyond All Reason's unit control to Planetary Annihilation: TITANS, with smart selection, a grid build menu, area commands and formations.",
		category: "games",
		tech: ["JavaScript"],
		platforms: ["PA: TITANS"],
		repo: gh("bar-annihilation"),
	},
	{
		name: "TA / SC / BAR Archive",
		tagline: "1,254 RTS units, side by side",
		description:
			"A visual catalog of units from Total Annihilation, Supreme Commander and Beyond All Reason, with a view that lines up the same job across the three.",
		category: "games",
		tech: ["Python", "JavaScript"],
		platforms: ["Web"],
		repo: gh("rts-unit-catalog"),
		href: pages("rts-unit-catalog"),
	},
	{
		name: "rust-toast",
		tagline: "Notification cards for Rust apps",
		description:
			"Native cards on Windows and macOS that stack in a corner, sit over every window and never take focus. A small CLI gives the same cards to apps in other languages.",
		category: "libraries",
		tech: ["Rust", "Win32", "AppKit"],
		platforms: ["Windows", "macOS"],
		repo: gh("rust-toast"),
		href: pages("rust-toast"),
	},
	{
		name: "go-room",
		tagline: "Rooms with no account, in pure Go",
		description:
			"Copies of an app find each other with a room code and talk directly over WebRTC data channels. Signaling is sealed and sent over the LAN, a self-hosted hub or public MQTT brokers.",
		category: "libraries",
		tech: ["Go", "WebRTC", "MQTT"],
		platforms: ["Windows", "macOS", "Linux"],
		repo: gh("go-room"),
	},
	{
		name: "go-toast",
		tagline: "Notification cards for Go apps",
		description:
			"The notification cards from Toru as their own module: plain Win32 on Windows with no webview and no cgo, AppKit on macOS.",
		category: "libraries",
		tech: ["Go", "Win32", "AppKit"],
		platforms: ["Windows", "macOS"],
		repo: gh("go-toast"),
	},
];

/** The stack section is computed from the projects above, so it cannot drift from them. */
export const techGroups: { title: string; items: string[] }[] = [
	{
		title: "Languages",
		items: [
			"Rust",
			"Go",
			"TypeScript",
			"Python",
			"C#",
			"C",
			"GDScript",
			"JavaScript",
		],
	},
	{
		title: "Desktop & UI",
		items: [
			"Tauri",
			"Wails",
			"React",
			"Svelte",
			"Tailwind",
			"WebGPU",
			"WebGL",
			"three.js",
			"Bubble Tea",
			"libghostty",
			"Win32",
			"AppKit",
		],
	},
	{
		title: "Agents & AI",
		items: ["MCP", "ACP", "Whisper", "MLX"],
	},
	{
		title: "Networking & data",
		items: [
			"iroh",
			"WebRTC",
			"WireGuard",
			"MQTT",
			"Steam networking",
			"SQLite",
			"Bun",
			"FFmpeg",
		],
	},
	{
		title: "Game tech",
		items: ["Godot", "Blender", "Harmony", "PowerPC injection"],
	},
];

export function projectsUsing(tech: string): Project[] {
	return projects.filter((p) => p.tech.includes(tech));
}
