import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
	{ href: "#services", label: "Services" },
	{ href: "#focus", label: "Focus" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
	return (
		<header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
			<div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4 sm:px-6">
				<a
					href="#top"
					className="flex items-center gap-2 font-semibold tracking-tight"
				>
					<span className="flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
						HS
					</span>
					<span className="hidden sm:inline">Horton Software</span>
				</a>

				<nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
					{nav.map((item) => (
						<a
							key={item.href}
							href={item.href}
							className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
						>
							{item.label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-2">
					<Button variant="ghost" size="icon-sm" asChild>
						<a
							href="https://github.com/StephenSHorton"
							target="_blank"
							rel="noreferrer"
							aria-label="GitHub"
						>
							<Github />
						</a>
					</Button>
					<Button size="sm" asChild>
						<a href="#contact">Get in touch</a>
					</Button>
				</div>
			</div>
		</header>
	);
}
