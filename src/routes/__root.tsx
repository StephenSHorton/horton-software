import { createRootRoute, Outlet } from "@tanstack/react-router";
import { AmbientStage } from "@/components/ambient-stage";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const RootLayout = () => (
	// Avoid overflow-x-hidden here — it breaks position: sticky in most browsers.
	<div className="relative flex min-h-dvh flex-col">
		<a className="skip-link" href="#main">
			Skip to content
		</a>
		<AmbientStage />
		<SiteHeader />
		<main id="main" className="relative z-[1] min-w-0 flex-1">
			<Outlet />
		</main>
		<SiteFooter />
	</div>
);

export const Route = createRootRoute({ component: RootLayout });
