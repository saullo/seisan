import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@seisan/ui/components/carousel";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import Autoplay from "embla-carousel-autoplay";
import { getProductsCarouselQuery } from "../-queries/get-products-carousel-query";

function ProductsCarousel() {
	const { data: products } = useSuspenseQuery(getProductsCarouselQuery);

	return (
		<Carousel
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}
		>
			<CarouselContent>
				{products.map((product) => (
					<CarouselItem key={product.id}>
						<Image
							src={product.image}
							width={1920}
							height={400}
							className="object-cover h-100"
							priority
						/>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}

export { ProductsCarousel };
