"use client";

import { UserButton } from "@clerk/nextjs";
import { api } from "@workspace/backend/_generated/api";
import { Button } from "@workspace/ui/components/button";
import { useMutation, useQuery } from "convex/react";

export default function Page() {
	const users = useQuery(api.users.getMany);
	const createUser = useMutation(api.users.create);

	return (
		<div className="flex items-center justify-center min-h-svh">
			<UserButton />
			<Button onClick={() => createUser()}>Create</Button>
			<div>{JSON.stringify(users)}</div>
		</div>
	);
}
