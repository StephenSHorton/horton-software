import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AmbientStage } from "@/components/ambient-stage";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const RootLayout = () => (
	<div className="relative flex min-h-dvh flex-col overflow-x-hidden">
		<AmbientStage />
		<div className="lightbar" aria-hidden />
		<SiteHeader />
		<main className="relative z-[1] flex-1">
			<Outlet />
		</main>
		<SiteFooter />
	</div>
);

export const Route = createRootRoute({ component: RootLayout });
