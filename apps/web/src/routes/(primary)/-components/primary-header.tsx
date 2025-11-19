import { Button } from "@seisan/ui/components/button";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
} from "@seisan/ui/components/input-group";
import { Separator } from "@seisan/ui/components/separator";
import { Link } from "@tanstack/react-router";
import {
	ArrowRightIcon,
	SearchIcon,
	ShoppingBasketIcon,
	ShoppingCartIcon,
} from "lucide-react";

function PrimaryHeader() {
	return (
		<div>
			<div className="container mx-auto py-8">
				<div className="flex items-center justify-between gap-50">
					<div>
						<Button variant="ghost" asChild>
							<Link to="/">
								<ShoppingBasketIcon />
								<span>Seisan</span>
							</Link>
						</Button>
					</div>

					<InputGroup>
						<InputGroupInput placeholder="Search for anything..." />
						<InputGroupAddon>
							<SearchIcon />
						</InputGroupAddon>
					</InputGroup>

					<div className="flex gap-2">
						<Button variant="ghost">
							<ShoppingCartIcon />
							<span>Cart</span>
						</Button>
						<Button variant="ghost">
							<span>Login</span>
						</Button>
						<Button>
							<span>Sell your products</span>
							<ArrowRightIcon />
						</Button>
					</div>
				</div>
			</div>
			<Separator />
		</div>
	);
}

export { PrimaryHeader };
