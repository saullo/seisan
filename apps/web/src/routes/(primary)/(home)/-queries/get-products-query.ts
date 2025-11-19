import { faker } from "@faker-js/faker";
import { queryOptions } from "@tanstack/react-query";

const getProductsQuery = queryOptions({
	queryKey: ["products"],
	queryFn: () => {
		const products = Array.from({ length: 5 }).map(() => ({
			id: faker.string.uuid(),
			name: faker.commerce.productName(),
			price: faker.number.int({ max: 100000 }),
			image: faker.image.url({
				width: 240,
				height: 240,
			}),
		}));
		return products;
	},
});

export { getProductsQuery };
