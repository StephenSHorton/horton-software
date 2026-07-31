export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative z-[1] mt-auto border-t border-white/8">
			<div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-10 sm:px-6">
				<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
					<div>
						<p className="font-semibold tracking-tight">Horton Software LLC</p>
						<p className="text-sm text-muted-foreground">
							Saratoga Springs, Utah
						</p>
					</div>
					<div className="flex flex-wrap gap-5 text-sm">
						<a
							className="text-muted-foreground transition-colors hover:text-[#a8d4f5]"
							href="https://github.com/StephenSHorton"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							className="text-muted-foreground transition-colors hover:text-[#a8d4f5]"
							href="mailto:4stephenhorton@gmail.com"
						>
							Email
						</a>
						<a
							className="text-muted-foreground transition-colors hover:text-[#a8d4f5]"
							href="https://stephenshorton.github.io/chrome-ref-drop/"
							target="_blank"
							rel="noreferrer"
						>
							Chrome Reference Drop
						</a>
					</div>
				</div>
				<div className="h-px w-full bg-gradient-to-r from-transparent via-[color-mix(in_oklch,var(--brand)_40%,transparent)] to-transparent" />
				<p className="text-xs text-muted-foreground">
					© {year} Horton Software LLC. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
