import { SectionHeading } from "@/components/section-heading";
import { projects, projectsUsing, techGroups } from "@/data/projects";
import { cn } from "@/lib/utils";

export function StackSection() {
	return (
		<section id="stack" tabIndex={-1} className="relative">
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
				<SectionHeading index="03" label="Stack" title="What it's built with">
					Every entry here is in use in one of the {projects.length} projects
					above. The names beside it say where.
				</SectionHeading>
				<div className="gap-4 lg:columns-2">
					{techGroups.map((group) => {
						const wide = group.title === "Languages";
						return (
							<div
								key={group.title}
								className={cn(
									"glass reveal mb-4 break-inside-avoid p-5",
									wide && "[column-span:all]",
								)}
							>
								<h3 className="eyebrow mb-3">{group.title}</h3>
								<dl
									className={wide ? "grid gap-x-8 sm:grid-cols-2" : undefined}
								>
									{group.items.map((tech) => {
										const used = projectsUsing(tech);
										if (used.length === 0) return null;
										return (
											<div
												key={tech}
												className="flex items-baseline gap-3 border-b border-white/6 py-2"
											>
												<dt className="w-28 shrink-0 font-medium tracking-tight sm:w-36">
													{tech}
												</dt>
												<dd className="min-w-0 text-sm text-muted-foreground">
													{used.map((p) => p.name).join(", ")}
												</dd>
											</div>
										);
									})}
								</dl>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
