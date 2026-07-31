import { Gamepad2, Layers } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type ProjectIconProps = {
	name: string;
	src?: string;
	className?: string;
	/** Prefer square tile for featured cards; compact for list rows */
	size?: "md" | "sm";
};

export function ProjectIcon({
	name,
	src,
	className,
	size = "md",
}: ProjectIconProps) {
	const [failed, setFailed] = useState(false);
	const dim = size === "sm" ? "size-9" : "size-11";
	const iconDim = size === "sm" ? "size-4" : "size-5";

	if (!src || failed) {
		const Fallback = /game|spire|forge|multiplayer|s&box|annihilation/i.test(
			name,
		)
			? Gamepad2
			: Layers;
		return (
			<span
				className={cn(
					"icon-chip shrink-0",
					dim,
					size === "sm" && "rounded-lg",
					className,
				)}
				aria-hidden
			>
				<Fallback className={iconDim} />
			</span>
		);
	}

	return (
		<span
			className={cn(
				"flex shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-[0_0_12px_color-mix(in_oklch,var(--brand)_12%,transparent)]",
				dim,
				className,
			)}
		>
			<img
				src={src}
				alt=""
				width={size === "sm" ? 36 : 44}
				height={size === "sm" ? 36 : 44}
				className={cn(
					"size-full",
					src.endsWith(".svg") ? "object-contain p-1.5" : "object-cover",
				)}
				loading="lazy"
				onError={() => setFailed(true)}
			/>
		</span>
	);
}
