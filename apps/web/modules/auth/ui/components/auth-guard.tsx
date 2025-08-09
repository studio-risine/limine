"use client";

import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";
import AuthLayout from "../layouts/auth-layout";
import { SignInView } from "../views/sign-in-view";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
	return (
		<>
			<AuthLoading>
				<AuthLayout>
					<AuthLayout>Loading...</AuthLayout>
				</AuthLayout>
			</AuthLoading>
			<Authenticated>{children}</Authenticated>
			<Unauthenticated>
				<AuthLayout>
					<SignInView />
				</AuthLayout>
			</Unauthenticated>
		</>
	);
}
