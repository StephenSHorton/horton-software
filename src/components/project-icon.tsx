import { Gamepad2, Layers, Package } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectIconProps = {
	project: Project;
	/** Square tile for featured cards; compact for the smaller cards. */
	size?: "md" | "sm";
};

const fallbacks = {
	games: Gamepad2,
	libraries: Package,
	agents: Layers,
	apps: Layers,
} as const;

export function ProjectIcon({ project, size = "md" }: ProjectIconProps) {
	const dim = size === "sm" ? "size-9" : "size-12";
	const px = size === "sm" ? 36 : 48;

	if (!project.icon) {
		const Fallback = fallbacks[project.category];
		return (
			<span className={cn("icon-chip shrink-0", dim)} aria-hidden>
				<Fallback className={size === "sm" ? "size-4" : "size-5"} />
			</span>
		);
	}

	return (
		<span
			className={cn(
				"flex shrink-0 items-center justify-center overflow-hidden border border-white/10 bg-black/30 shadow-[0_0_12px_color-mix(in_oklch,var(--brand)_12%,transparent)]",
				dim,
			)}
		>
			<img
				src={project.icon}
				alt=""
				width={px}
				height={px}
				className={cn(
					"size-full",
					project.iconPad ? "object-contain p-1.5" : "object-cover",
				)}
				loading="lazy"
				decoding="async"
			/>
		</span>
	);
}
