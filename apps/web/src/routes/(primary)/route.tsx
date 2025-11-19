import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Footer } from "./-components/footer";
import { PrimaryHeader } from "./-components/primary-header";
import { SecondaryHeader } from "./-components/secondary-header";

export const Route = createFileRoute("/(primary)")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<PrimaryHeader />
			<SecondaryHeader />
			<Outlet />
			<Footer />
		</div>
	);
}
