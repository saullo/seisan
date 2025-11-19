import { faker } from "@faker-js/faker";
import { queryOptions } from "@tanstack/react-query";

const getDepartmentsQuery = queryOptions({
	queryKey: ["departments"],
	queryFn: () => {
		const departments = Array.from({ length: 10 }).map(() => ({
			id: faker.string.uuid(),
			name: faker.commerce.department(),
		}));
		return departments;
	},
});

export { getDepartmentsQuery };
