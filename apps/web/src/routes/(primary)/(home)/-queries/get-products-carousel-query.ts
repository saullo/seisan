import { faker } from "@faker-js/faker";
import { queryOptions } from "@tanstack/react-query";

const getProductsCarouselQuery = queryOptions({
	queryKey: ["products-carousel"],
	queryFn: () => {
		const products = Array.from({ length: 5 }).map(() => ({
			id: faker.string.uuid(),
			name: faker.commerce.productName(),
			image: faker.image.url({
				width: 1920,
				height: 600,
			}),
		}));
		return products;
	},
});

export { getProductsCarouselQuery };
