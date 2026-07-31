import { createRootRoute, Outlet } from "@tanstack/react-router";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const RootLayout = () => (
	<div className="relative flex min-h-dvh flex-col overflow-x-hidden">
		<div
			aria-hidden
			className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.45_0.14_255_/_0.35),transparent)]"
		/>
		<SiteHeader />
		<main className="flex-1">
			<Outlet />
		</main>
		<SiteFooter />
	</div>
);

export const Route = createRootRoute({ component: RootLayout });
