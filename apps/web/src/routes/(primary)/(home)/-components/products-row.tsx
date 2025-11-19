import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@seisan/ui/components/carousel";
import {
	Item,
	ItemContent,
	ItemDescription,
	ItemHeader,
	ItemMedia,
	ItemTitle,
} from "@seisan/ui/components/item";
import { useSuspenseQuery } from "@tanstack/react-query";
import { Image } from "@unpic/react";
import { getProductsQuery } from "../-queries/get-products-query";

const formatter = new Intl.NumberFormat("en", {
	style: "currency",
	currency: "usd",
});

interface ProductsRowProps {
	title: string;
}

function ProductsRow({ title }: ProductsRowProps) {
	const { data: products } = useSuspenseQuery(getProductsQuery);

	return (
		<div className="container mx-auto py-10">
			<span className="font-bold text-2xl">{title}</span>

			<div>
				<Carousel>
					<CarouselContent>
						<CarouselItem className="grid grid-cols-5">
							{products.map((product) => (
								<Item key={product.id}>
									<ItemHeader>
										<ItemMedia>
											<Image
												src={product.image}
												width={240}
												height={240}
												className="rounded-xl"
											/>
										</ItemMedia>
									</ItemHeader>
									<ItemContent>
										<ItemTitle className="text-muted-foreground font-normal">
											{product.name}
										</ItemTitle>
										<ItemDescription className="text-xl text-primary font-bold">
											{formatter.format(product.price / 100)}
										</ItemDescription>
									</ItemContent>
								</Item>
							))}
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>
		</div>
	);
}

export { ProductsRow };
