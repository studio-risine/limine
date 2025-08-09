import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<div className="flex h-svh justify-center items-center">{children}</div>
	);
}
