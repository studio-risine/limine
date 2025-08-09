import type { ReactNode } from "react";
import AuthLayout from "@/modules/auth/ui/layouts/auth-layout";

export default function Layout({ children }: { children: ReactNode }) {
	return <AuthLayout>{children}</AuthLayout>;
}
