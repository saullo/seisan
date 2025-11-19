import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle,
} from "@seisan/ui/components/navigation-menu";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getDepartmentsQuery } from "../-queries/get-departments-query";

function SecondaryHeader() {
	const { data: departments } = useSuspenseQuery(getDepartmentsQuery);

	return (
		<div>
			<div className="container mx-auto py-2">
				<div className="flex items-center gap-5">
					<NavigationMenu>
						<NavigationMenuList>
							{departments.map((department) => (
								<NavigationMenuItem key={department.id}>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										<span>{department.name}</span>
									</NavigationMenuLink>
								</NavigationMenuItem>
							))}
						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</div>
		</div>
	);
}

export { SecondaryHeader };
