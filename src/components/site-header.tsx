import { Github, Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const nav = [
	{ href: "#work", label: "Work" },
	{ href: "#projects", label: "Projects" },
	{ href: "#stack", label: "Stack" },
	{ href: "#services", label: "Services" },
	{ href: "#about", label: "About" },
	{ href: "#contact", label: "Contact" },
] as const;

/**
 * One navigation list at every size. It is a popover while the links do not
 * fit beside the brand and actions, and an inline row once they do. The
 * switch is measured, so there is no breakpoint to keep in step with the links.
 */
function useAdaptiveNav(
	headerRef: React.RefObject<HTMLElement | null>,
	innerRef: React.RefObject<HTMLDivElement | null>,
	menuRef: React.RefObject<HTMLUListElement | null>,
) {
	useEffect(() => {
		const header = headerRef.current;
		const inner = innerRef.current;
		const menu = menuRef.current;
		if (!header || !inner || !menu) return;

		// Without the Popover API the list simply stays inline.
		if (!("popover" in HTMLElement.prototype)) {
			menu.removeAttribute("popover");
			header.classList.add("is-wide");
			return;
		}

		let lastWidth = 0;
		const measure = () => {
			const width = header.clientWidth;
			const wasWide = header.classList.contains("is-wide");
			// While collapsed, only a wider header can change the answer.
			if (!wasWide && width <= lastWidth) return;
			lastWidth = width;

			const wasOpen = !wasWide && menu.matches(":popover-open");
			header.classList.add("is-wide", "is-measuring");
			const fits = inner.scrollWidth <= inner.clientWidth;
			header.classList.toggle("is-wide", fits);
			if (fits) {
				menu.removeAttribute("popover");
			} else {
				menu.setAttribute("popover", "auto");
				if (wasOpen) menu.showPopover();
			}
			requestAnimationFrame(() => header.classList.remove("is-measuring"));
		};

		measure();
		const observer = new ResizeObserver(measure);
		observer.observe(header);
		observer.observe(menu);
		return () => observer.disconnect();
	}, [headerRef, innerRef, menuRef]);
}

/** Marks the link for the section in view, for sight and for screen readers. */
function useScrollSpy(menuRef: React.RefObject<HTMLUListElement | null>) {
	useEffect(() => {
		const menu = menuRef.current;
		if (!menu) return;
		const links = [...menu.querySelectorAll<HTMLAnchorElement>("a")];

		if (CSS.supports("scroll-target-group: auto")) {
			const sync = () => {
				const current = menu.querySelector("a:target-current");
				for (const link of links) {
					if (link === current) link.setAttribute("aria-current", "true");
					else link.removeAttribute("aria-current");
				}
			};
			sync();
			document.addEventListener("scrollend", sync);
			return () => document.removeEventListener("scrollend", sync);
		}

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					for (const link of links) {
						const active = link.hash === `#${entry.target.id}`;
						link.classList.toggle("target-current", active);
						if (active) link.setAttribute("aria-current", "true");
						else link.removeAttribute("aria-current");
					}
				}
			},
			{ rootMargin: "-50% 0px -50% 0px", threshold: 0 },
		);
		for (const link of links) {
			const section = document.getElementById(link.hash.slice(1));
			if (section) observer.observe(section);
		}
		return () => observer.disconnect();
	}, [menuRef]);
}

export function SiteHeader() {
	const headerRef = useRef<HTMLElement>(null);
	const innerRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLUListElement>(null);
	useAdaptiveNav(headerRef, innerRef, menuRef);
	useScrollSpy(menuRef);

	const closeMenu = () => {
		const menu = menuRef.current;
		if (!menu?.hasAttribute("popover") || !("hidePopover" in menu)) return;
		if (menu.matches(":popover-open")) {
			menu.hidePopover();
		}
	};

	return (
		<header
			ref={headerRef}
			className="site-header sticky top-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55"
		>
			{/* Single lightbar — top of sticky nav only */}
			<div className="lightbar" aria-hidden />
			<div
				ref={innerRef}
				className="header-inner mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6"
			>
				<a
					href="#top"
					className="flex items-center gap-2.5 font-semibold tracking-tight"
				>
					<span className="flex size-7 items-center justify-center rounded-none bg-gradient-to-b from-[oklch(0.8_0.12_245)] to-[oklch(0.55_0.14_255)] text-xs font-bold text-primary-foreground shadow-[0_0_16px_color-mix(in_oklch,var(--brand)_50%,transparent)]">
						HS
					</span>
					<span>Horton Software</span>
				</a>

				<nav aria-label="Primary" className="flex items-center">
					<button
						type="button"
						className="menu-button flex items-center gap-2 border border-white/12 bg-white/5 px-3 py-1.5 text-sm font-medium"
						popoverTarget="site-menu"
						popoverTargetAction="toggle"
						aria-controls="site-menu"
					>
						<Menu className="size-4" aria-hidden />
						<span>Menu</span>
					</button>
					<ul id="site-menu" ref={menuRef} className="site-menu" popover="auto">
						{nav.map((item) => (
							<li key={item.href}>
								<a href={item.href} onClick={closeMenu}>
									{item.label}
								</a>
							</li>
						))}
					</ul>
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
						className="btn-glow hidden rounded-none font-semibold sm:inline-flex"
						asChild
					>
						<a href="#contact">Get in touch</a>
					</Button>
				</div>
			</div>
		</header>
	);
}
