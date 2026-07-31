import { Separator } from "@/components/ui/separator";

export function SiteFooter() {
	const year = new Date().getFullYear();

	return (
		<footer className="mt-auto border-t border-border/60">
			<div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:px-6">
				<div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
					<div>
						<p className="font-semibold tracking-tight">Horton Software LLC</p>
						<p className="text-sm text-muted-foreground">
							Saratoga Springs, Utah
						</p>
					</div>
					<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
						<a
							className="hover:text-foreground"
							href="https://github.com/StephenSHorton"
							target="_blank"
							rel="noreferrer"
						>
							GitHub
						</a>
						<a
							className="hover:text-foreground"
							href="mailto:4stephenhorton@gmail.com"
						>
							Email
						</a>
					</div>
				</div>
				<Separator />
				<p className="text-xs text-muted-foreground">
					© {year} Horton Software LLC. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
