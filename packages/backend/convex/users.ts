import { NotAuthenticatedError } from "../../errors";
import { mutation, query } from "./_generated/server";

export const getMany = query({
	args: {},
	handler: async (ctx) => {
		const users = await ctx.db.query("users").collect();

		return users;
	},
});

export const create = mutation({
	args: {},
	handler: async (ctx) => {
		const identify = await ctx.auth.getUserIdentity();

		if (identify === null) {
			throw new NotAuthenticatedError();
		}

		const _userId = await ctx.db.insert("users", {
			name: "Gabs",
			email: "gbs@gmail.com",
		});

		throw new Error("Tracking user");

		// return _userId;
	},
});
