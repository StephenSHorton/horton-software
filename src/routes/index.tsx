import { createFileRoute } from "@tanstack/react-router";
import {
	Bot,
	Boxes,
	Code2,
	Gamepad2,
	Mail,
	Rocket,
	Server,
	Sparkles,
} from "lucide-react";
import {
	FeaturedSection,
	ProjectsSection,
} from "@/components/projects-section";
import { SectionHeading } from "@/components/section-heading";
import { StackSection } from "@/components/stack-section";
import { Button } from "@/components/ui/button";
import { projects, techGroups } from "@/data/projects";

export const Route = createFileRoute("/")({
	component: HomePage,
});

const services = [
	{
		icon: Code2,
		title: "Product engineering",
		description:
			"End-to-end web and desktop apps in React, TypeScript, Go and Rust, from prototype to shippable product.",
	},
	{
		icon: Bot,
		title: "AI & agentic systems",
		description:
			"LLM integrations, tool-using agents, MCP servers, and workflows that actually fit how you work.",
	},
	{
		icon: Server,
		title: "Platform & backends",
		description:
			"APIs, gRPC services, Postgres and cloud runtimes: solid infrastructure under products that need to last.",
	},
	{
		icon: Gamepad2,
		title: "Games & interactive",
		description:
			"Game tooling, mods, multiplayer systems, and 3D and web experiments, from editor automation to in-engine play.",
	},
] as const;

const focus = [
	{
		icon: Sparkles,
		title: "Agent-native tooling",
		body: "Software designed to be driven by people and coding agents together: CLIs, MCP, and tight feedback loops.",
	},
	{
		icon: Boxes,
		title: "Local first",
		body: "Apps that keep your data on your own machines and talk device to device, with no account and no server in the middle where one isn't needed.",
	},
	{
		icon: Rocket,
		title: "Ship small, ship often",
		body: "Solo-operator focus: clear scope, automated releases, and products that stay maintainable as they grow.",
	},
] as const;

const languages =
	techGroups.find((group) => group.title === "Languages")?.items ?? [];
const platforms = new Set(
	projects
		.flatMap((p) => p.platforms)
		.filter((p) => ["Windows", "macOS", "Linux", "Android", "Web"].includes(p)),
);

const stats = [
	{ value: projects.length, label: "public projects here" },
	{ value: languages.length, label: "languages in use" },
	{ value: platforms.size, label: "platforms shipped to" },
] as const;

const outlineButton =
	"rounded-none border-white/12 bg-white/5 px-6 font-semibold backdrop-blur-sm hover:bg-white/10";

function HomePage() {
	return (
		<div id="top">
			{/* Hero */}
			<section className="mx-auto max-w-6xl px-4 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24">
				<div className="max-w-3xl space-y-6">
					<div className="glass inline-flex items-center gap-2 rounded-none px-3 py-1.5 text-[0.72rem] font-semibold tracking-[0.16em] text-muted-foreground uppercase">
						<span className="badge-pulse-dot" aria-hidden />
						Horton Software LLC
					</div>
					<h1 className="text-balance text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
						Software for people and the{" "}
						<span className="text-accent-gradient">agents beside them</span>.
					</h1>
					<p className="max-w-2xl text-pretty text-lg text-muted-foreground sm:text-xl">
						Independent software company based in Utah. We design and build{" "}
						<strong className="font-semibold text-foreground">
							desktop apps, agent tooling and game tech
						</strong>
						, with a bias toward clarity, speed, and systems that compound.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button
							size="lg"
							className="btn-glow rounded-none px-6 font-semibold"
							asChild
						>
							<a href="#work">See the work</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className={outlineButton}
							asChild
						>
							<a href="#contact">
								<Mail />
								Contact
							</a>
						</Button>
					</div>
				</div>

				<dl className="mt-14 grid max-w-3xl grid-cols-3 border-y border-white/8">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex flex-col-reverse gap-1 border-l border-white/8 px-4 py-5 first:border-l-0 first:pl-0"
						>
							<dt className="text-xs text-muted-foreground sm:text-sm">
								{stat.label}
							</dt>
							<dd className="font-mono text-3xl font-semibold tracking-tight sm:text-4xl">
								{stat.value}
							</dd>
						</div>
					))}
				</dl>
			</section>

			<FeaturedSection />
			<ProjectsSection />
			<StackSection />

			{/* Services */}
			<section id="services" tabIndex={-1} className="relative">
				<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
					<SectionHeading index="04" label="Services" title="What we do">
						Hands-on engineering across the stack: product, platform, and
						agentic tooling.
					</SectionHeading>
					<div className="grid gap-4 sm:grid-cols-2">
						{services.map((item) => (
							<div key={item.title} className="glass reveal space-y-3 p-5">
								<div className="icon-chip">
									<item.icon className="size-4" aria-hidden />
								</div>
								<h3 className="font-semibold tracking-tight">{item.title}</h3>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{item.description}
								</p>
							</div>
						))}
					</div>

					<h3 className="mt-14 mb-4 font-semibold tracking-tight">
						How we work
					</h3>
					<div className="grid gap-4 md:grid-cols-3">
						{focus.map((item) => (
							<div key={item.title} className="glass reveal space-y-3 p-5">
								<div className="icon-chip">
									<item.icon className="size-4" aria-hidden />
								</div>
								<h4 className="font-semibold tracking-tight">{item.title}</h4>
								<p className="text-sm leading-relaxed text-muted-foreground">
									{item.body}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* About */}
			<section id="about" tabIndex={-1} className="relative">
				<div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
					<div className="glass-strong reveal grid gap-10 rounded-none p-6 sm:p-8 md:grid-cols-[1fr_1.2fr] md:items-start">
						<div className="space-y-3">
							<p className="eyebrow">
								05 <span>/</span> About
							</p>
							<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
								One engineer, full ownership
							</h2>
							<p className="text-muted-foreground">Solo-operator LLC.</p>
						</div>
						<div className="space-y-4 text-muted-foreground leading-relaxed">
							<p>
								<strong className="font-medium text-foreground">
									Stephen Horton
								</strong>{" "}
								is a senior full-stack and platform engineer with a focus on
								AI/agentic systems, TypeScript product work, and systems
								engineering in Go and Rust.
							</p>
							<p>
								Horton Software LLC is the home for client work, product
								experiments, and long-running tools, from desktop apps and game
								tooling to agent-driven developer infrastructure.
							</p>
							<p className="text-sm">
								Based in Saratoga Springs, Utah · Available for select
								engagements.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact */}
			<section
				id="contact"
				tabIndex={-1}
				className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24"
			>
				<div className="glass-strong reveal space-y-5 p-6 sm:p-8">
					<p className="eyebrow">
						06 <span>/</span> Contact
					</p>
					<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						Let&apos;s <span className="text-accent-gradient">talk</span>
					</h2>
					<p className="max-w-lg text-pretty text-muted-foreground">
						Have a product idea, tooling problem, or agentic workflow to build?
						Reach out. Short notes welcome.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button
							size="lg"
							className="btn-glow rounded-none px-6 font-semibold"
							asChild
						>
							<a href="mailto:4stephenhorton@gmail.com">
								<Mail />
								4stephenhorton@gmail.com
							</a>
						</Button>
						<Button
							size="lg"
							variant="outline"
							className={outlineButton}
							asChild
						>
							<a
								href="https://github.com/StephenSHorton"
								target="_blank"
								rel="noreferrer"
							>
								GitHub profile
							</a>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
