import { ArrowUpRight, Github } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { projects } from "@/data/projects";

export function ProjectsSection() {
	const featured = projects.filter((p) => p.featured);
	const more = projects.filter((p) => !p.featured);

	return (
		<section id="projects" className="relative">
			<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
				<div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
					<div className="max-w-xl space-y-2">
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							Projects
						</h2>
						<p className="text-muted-foreground">
							Selected public work — developer tools, game systems, and
							agent-native apps shipping under Horton Software.
						</p>
					</div>
					<Button
						variant="outline"
						className="w-fit shrink-0 rounded-full border-white/12 bg-white/5 font-semibold backdrop-blur-sm hover:bg-white/10"
						asChild
					>
						<a
							href="https://github.com/StephenSHorton"
							target="_blank"
							rel="noreferrer"
						>
							<Github />
							All on GitHub
						</a>
					</Button>
				</div>

				<div className="grid gap-4 sm:grid-cols-2">
					{featured.map((project) => (
						<Card
							key={project.repo}
							className="glass group flex flex-col gap-0 border-0 py-0 shadow-none transition-[box-shadow,border-color] hover:shadow-[0_0_0_1px_color-mix(in_oklch,var(--brand)_35%,transparent)]"
						>
							<CardHeader className="gap-3 px-5 pt-5 pb-3">
								<div className="flex items-start gap-3">
									<ProjectIcon name={project.name} src={project.icon} />
									<div className="min-w-0 flex-1 space-y-1">
										<div className="flex items-start justify-between gap-2">
											<CardTitle className="text-base tracking-tight">
												{project.name}
											</CardTitle>
											<a
												href={project.href ?? project.repo}
												target="_blank"
												rel="noreferrer"
												className="icon-chip size-8 shrink-0 rounded-lg transition-transform group-hover:scale-105"
												aria-label={`Open ${project.name}`}
											>
												<ArrowUpRight className="size-3.5" />
											</a>
										</div>
										<p className="text-sm font-medium text-brand-bright">
											{project.tagline}
										</p>
									</div>
								</div>
								<CardDescription className="text-sm leading-relaxed text-muted-foreground">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardFooter className="mt-auto flex flex-wrap items-center gap-2 px-5 pt-0 pb-5">
								{project.tags.map((tag) => (
									<Badge
										key={tag}
										variant="outline"
										className="rounded-full border-white/10 bg-white/5 font-normal text-muted-foreground"
									>
										{tag}
									</Badge>
								))}
								<span className="ml-auto flex gap-3 text-xs">
									<a
										href={project.repo}
										target="_blank"
										rel="noreferrer"
										className="text-muted-foreground transition-colors hover:text-[#a8d4f5]"
									>
										Repo
									</a>
									{project.href ? (
										<a
											href={project.href}
											target="_blank"
											rel="noreferrer"
											className="text-muted-foreground transition-colors hover:text-[#a8d4f5]"
										>
											Site
										</a>
									) : null}
								</span>
							</CardFooter>
						</Card>
					))}
				</div>

				{more.length > 0 ? (
					<div className="mt-8 space-y-3">
						<h3 className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
							More
						</h3>
						<ul className="grid gap-2 sm:grid-cols-2">
							{more.map((project) => (
								<li key={project.repo}>
									<a
										href={project.href ?? project.repo}
										target="_blank"
										rel="noreferrer"
										className="glass flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
									>
										<ProjectIcon
											name={project.name}
											src={project.icon}
											size="sm"
										/>
										<div className="min-w-0 flex-1">
											<p className="truncate font-medium tracking-tight">
												{project.name}
											</p>
											<p className="truncate text-sm text-muted-foreground">
												{project.tagline}
											</p>
										</div>
										<ArrowUpRight className="size-4 shrink-0 text-muted-foreground" />
									</a>
								</li>
							))}
						</ul>
					</div>
				) : null}
			</div>
		</section>
	);
}
