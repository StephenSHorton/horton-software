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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Route = createFileRoute("/")({
	component: HomePage,
});

const services = [
	{
		icon: Code2,
		title: "Product engineering",
		description:
			"End-to-end web and desktop apps — React, TypeScript, Go, Rust — from prototype to shippable product.",
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
			"APIs, gRPC services, Postgres, cloud runtimes — solid infrastructure under products that need to last.",
	},
	{
		icon: Gamepad2,
		title: "Games & interactive",
		description:
			"Game tools, Roblox/TypeScript, 3D web, and experimental builds where systems meet play.",
	},
] as const;

const focus = [
	{
		icon: Sparkles,
		title: "Agent-native tooling",
		body: "Software designed to be driven by humans and coding agents together — CLIs, MCP, and tight feedback loops.",
	},
	{
		icon: Boxes,
		title: "Modern TypeScript stacks",
		body: "Vite + Rolldown, React 19, Tailwind, shadcn — fast local DX without sacrificing production quality.",
	},
	{
		icon: Rocket,
		title: "Ship small, ship often",
		body: "Solo-operator focus: clear scope, automated deploys, and products that stay maintainable as they grow.",
	},
] as const;

function HomePage() {
	return (
		<div id="top">
			{/* Hero */}
			<section className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-24">
				<div className="max-w-2xl space-y-6">
					<Badge variant="secondary" className="font-normal">
						Horton Software LLC
					</Badge>
					<h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
						Software for builders who ship.
					</h1>
					<p className="text-pretty text-lg text-muted-foreground sm:text-xl">
						Independent software company based in Utah. We design and build
						products, platforms, and AI-assisted tools — with a bias toward
						clarity, speed, and systems that compound.
					</p>
					<div className="flex flex-wrap gap-3">
						<Button size="lg" asChild>
							<a href="#contact">
								<Mail />
								Contact
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a
								href="https://github.com/StephenSHorton"
								target="_blank"
								rel="noreferrer"
							>
								View work on GitHub
							</a>
						</Button>
					</div>
				</div>
			</section>

			{/* Services */}
			<section id="services" className="border-t border-border/60 bg-card/30">
				<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
					<div className="mb-10 max-w-xl space-y-2">
						<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
							What we do
						</h2>
						<p className="text-muted-foreground">
							Hands-on engineering across the stack — product, platform, and
							agentic tooling.
						</p>
					</div>
					<div className="grid gap-4 sm:grid-cols-2">
						{services.map((item) => (
							<Card key={item.title} className="bg-card/80">
								<CardHeader>
									<div className="mb-1 flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
										<item.icon className="size-4" />
									</div>
									<CardTitle className="text-base">{item.title}</CardTitle>
									<CardDescription className="text-sm leading-relaxed">
										{item.description}
									</CardDescription>
								</CardHeader>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Focus */}
			<section
				id="focus"
				className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20"
			>
				<div className="mb-10 max-w-xl space-y-2">
					<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						How we work
					</h2>
					<p className="text-muted-foreground">
						Principles that show up in every engagement and side project.
					</p>
				</div>
				<div className="grid gap-6 md:grid-cols-3">
					{focus.map((item) => (
						<div key={item.title} className="space-y-3">
							<div className="flex size-9 items-center justify-center rounded-lg border border-border/80 bg-background text-primary">
								<item.icon className="size-4" />
							</div>
							<h3 className="font-semibold tracking-tight">{item.title}</h3>
							<p className="text-sm leading-relaxed text-muted-foreground">
								{item.body}
							</p>
						</div>
					))}
				</div>
			</section>

			{/* About */}
			<section id="about" className="border-t border-border/60 bg-card/30">
				<div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
					<div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-start">
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
								About
							</h2>
							<p className="text-muted-foreground">
								Solo-operator LLC. One engineer, full ownership.
							</p>
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
								experiments, and long-running tools — from desktop apps and game
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
				className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24"
			>
				<Card className="overflow-hidden border-primary/20 bg-gradient-to-br from-card via-card to-primary/10">
					<CardHeader className="gap-3 sm:px-8 sm:pt-8">
						<CardTitle className="text-2xl tracking-tight sm:text-3xl">
							Let&apos;s talk
						</CardTitle>
						<CardDescription className="max-w-lg text-base">
							Have a product idea, tooling problem, or agentic workflow to
							build? Reach out — short notes welcome.
						</CardDescription>
					</CardHeader>
					<CardContent className="flex flex-wrap gap-3 sm:px-8 sm:pb-8">
						<Button size="lg" asChild>
							<a href="mailto:4stephenhorton@gmail.com">
								<Mail />
								4stephenhorton@gmail.com
							</a>
						</Button>
						<Button size="lg" variant="outline" asChild>
							<a
								href="https://github.com/StephenSHorton"
								target="_blank"
								rel="noreferrer"
							>
								GitHub profile
							</a>
						</Button>
					</CardContent>
				</Card>
			</section>
		</div>
	);
}
