import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
	{ href: "#projects", label: "Projects" },
	{ href: "#services", label: "Services" },
	{ href: "#focus", label: "Focus" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
			{/* Single lightbar — top of sticky nav only */}
			<div className="lightbar" aria-hidden />
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
				<a
					href="#top"
					className="flex items-center gap-2.5 font-semibold tracking-tight"
				>
					<span className="flex size-7 items-center justify-center rounded-none bg-gradient-to-b from-[oklch(0.8_0.12_245)] to-[oklch(0.55_0.14_255)] text-xs font-bold text-primary-foreground shadow-[0_0_16px_color-mix(in_oklch,var(--brand)_50%,transparent)]">
						HS
					</span>
					<span className="hidden sm:inline">Horton Software</span>
				</a>

				<nav
					className="hidden items-center gap-0.5 md:flex"
					aria-label="Primary"
				>
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-none px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<Button
						variant="ghost"
						size="icon-sm"
						className="rounded-none text-muted-foreground hover:text-foreground"
						asChild
					>
						<a
							href="https://github.com/StephenSHorton"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<Github />
						</a>
					</Button>
					<Button
						size="sm"
						className="btn-glow rounded-none font-semibold"
						asChild
					>
						<a href="#contact">Get in touch</a>
					</Button>
				</div>
			</div>
		</header>
	);
}
