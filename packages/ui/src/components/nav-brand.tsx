import { IconInnerShadowTop } from "@tabler/icons-react";

interface NavBrandProps {
	href: string;
}

export function NavBrand({ href }: NavBrandProps) {
	return (
		<a href={href}>
			<IconInnerShadowTop className="!size-5" />
			<span className="text-base font-semibold">Acme Inc.</span>
		</a>
	);
}
