import { ArrowUpRight, Github } from "lucide-react";
import { ProjectIcon } from "@/components/project-icon";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { categories, type Project, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

function ProjectName({ project }: { project: Project }) {
	return (
		<>
			{project.name}
			{project.native ? (
				<span lang="ja" className="ml-2 font-normal text-muted-foreground">
					{project.native}
				</span>
			) : null}
		</>
	);
}

function ProjectLinks({ project }: { project: Project }) {
	const link =
		"inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-[#a8d4f5]";
	// Without a product site the title already links to the source.
	if (!project.href) return null;
	return (
		<span className="ml-auto flex shrink-0 gap-3">
			<a
				href={project.repo}
				target="_blank"
				rel="noreferrer"
				className={link}
				aria-label={`${project.name} source on GitHub`}
			>
				<Github className="size-3.5" aria-hidden />
				Source
			</a>
		</span>
	);
}

function FeaturedCard({ project }: { project: Project }) {
	return (
		<article className="card glass reveal flex flex-col gap-4 p-5 sm:p-6">
			<header className="flex items-start gap-4">
				<ProjectIcon project={project} />
				<div className="min-w-0 flex-1">
					<h3 className="text-lg font-semibold tracking-tight">
						<a
							className="card-link"
							href={project.href ?? project.repo}
							target="_blank"
							rel="noreferrer"
						>
							<ProjectName project={project} />
						</a>
					</h3>
					<p className="text-sm font-medium text-brand-bright">
						{project.tagline}
					</p>
				</div>
				<ArrowUpRight
					className="size-4 shrink-0 text-muted-foreground"
					aria-hidden
				/>
			</header>
			<div className="space-y-3">
				<p className="text-pretty text-sm leading-relaxed text-muted-foreground">
					{project.description}
				</p>
				{project.highlights ? (
					<ul className="space-y-1.5 text-sm">
						{project.highlights.map((fact) => (
							<li key={fact} className="flex gap-2.5">
								<span
									className="mt-[0.55em] size-1 shrink-0 bg-brand"
									aria-hidden
								/>
								{fact}
							</li>
						))}
					</ul>
				) : null}
			</div>
			<footer className="mt-auto flex flex-wrap items-center gap-1.5 pt-1">
				{project.tech.slice(0, 4).map((tech) => (
					<span key={tech} className="chip">
						{tech}
					</span>
				))}
				<ProjectLinks project={project} />
			</footer>
			<p className="font-mono text-[0.68rem] tracking-wide text-muted-foreground uppercase">
				{project.platforms.join(" · ")}
			</p>
		</article>
	);
}

function CompactCard({ project }: { project: Project }) {
	return (
		<article className="card glass flex flex-col gap-3 p-4">
			<header className="flex items-center gap-3">
				<ProjectIcon project={project} size="sm" />
				<div className="min-w-0 flex-1">
					<h4 className="font-semibold tracking-tight">
						<a
							className="card-link"
							href={project.href ?? project.repo}
							target="_blank"
							rel="noreferrer"
						>
							<ProjectName project={project} />
						</a>
					</h4>
					<p className="text-sm text-brand-bright">{project.tagline}</p>
				</div>
			</header>
			<p className="text-pretty text-sm leading-relaxed text-muted-foreground">
				{project.description}
			</p>
			<footer className="mt-auto flex flex-wrap items-center gap-1.5">
				{project.tech.slice(0, 3).map((tech) => (
					<span key={tech} className="chip">
						{tech}
					</span>
				))}
				<ProjectLinks project={project} />
			</footer>
		</article>
	);
}

export function FeaturedSection() {
	const featured = projects.filter((p) => p.featured);
	return (
		<section id="work" tabIndex={-1} className="relative">
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
				<SectionHeading index="01" label="Work" title="What we're shipping">
					{featured.length} open-source projects, each with its own app. The
					titles link to the product pages.
				</SectionHeading>
				<div className="grid gap-4 md:grid-cols-2">
					{featured.map((project) => (
						<FeaturedCard key={project.repo} project={project} />
					))}
				</div>
			</div>
		</section>
	);
}

export function ProjectsSection() {
	const rest = projects.filter((p) => !p.featured);
	const groups = categories
		.map((category) => ({
			...category,
			items: rest.filter((p) => p.category === category.id),
		}))
		.filter((group) => group.items.length > 0);

	return (
		<section id="projects" tabIndex={-1} className="relative">
			<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
				<SectionHeading
					index="02"
					label="Projects"
					title="Everything else that's public"
					action={
						<Button
							variant="outline"
							className="w-fit shrink-0 rounded-none border-white/12 bg-white/5 font-semibold backdrop-blur-sm hover:bg-white/10"
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
					}
				>
					Tools, mods and libraries, grouped by what they are for.
				</SectionHeading>

				<div className="space-y-10">
					{groups.map((group) => (
						<div key={group.id} className="reveal">
							<div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-white/8 pb-2">
								<h3 className="font-semibold tracking-tight">{group.title}</h3>
								<p className="text-sm text-muted-foreground">{group.blurb}</p>
							</div>
							<div
								className={cn(
									"grid gap-3 sm:grid-cols-2",
									// Four cards sit better as two rows of two than three and one.
									group.items.length === 4 ? null : "lg:grid-cols-3",
								)}
							>
								{group.items.map((project) => (
									<CompactCard key={project.repo} project={project} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
