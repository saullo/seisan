import { createFileRoute } from "@tanstack/react-router";
import { ProductsCarousel } from "./-components/products-carousel";
import { ProductsRow } from "./-components/products-row";

export const Route = createFileRoute("/(primary)/(home)/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<ProductsCarousel />
			<ProductsRow title="Trending Products" />
			<ProductsRow title="Trending in Gear" />
			<ProductsRow title="Trending in Parts" />
			<ProductsRow title="Price Drops" />
		</div>
	);
}
