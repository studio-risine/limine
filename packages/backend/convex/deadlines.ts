import { v } from "convex/values";
import type { Id } from "./_generated/dataModel";
import { mutation, query } from "./_generated/server";

export const findMany = query({
	args: {},
	handler: async (ctx) => {
		return await ctx.db.query("deadlines").collect();
	},
});

export const findById = query({
	args: {
		deadlineId: v.id("deadlines"),
	},
	handler: async (ctx, args) => {
		return await ctx.db.get(args.deadlineId);
	},
});

export const findByProcess = query({
	args: {
		processId: v.id("processes"),
	},
	handler: async (ctx, args) => {
		const deadlines = await ctx.db
			.query("deadlines")
			.withIndex("processId", (query) => query.eq("processId", args.processId))
			.collect();
		return deadlines;
	},
});

export const create = mutation({
	args: {
		processId: v.id("processes"),
		dueDate: v.string(),
	},
	handler: async (ctx, args) => {
		return await ctx.db.insert("deadlines", {
			processId: args.processId,
			dueDate: args.dueDate,
		});
	},
});

export const remove = mutation({
	args: {
		id: v.id("deadlines"),
	},
	handler: async (ctx, args) => {
		await ctx.db.delete(args.id);
	},
});

export const update = mutation({
	args: {
		id: v.id("deadlines"),
		processId: v.optional(v.id("processes")),
		dueDate: v.optional(v.string()),
	},
	handler: async (ctx, args) => {
		const { id, ...updates } = args;

		const deadlineUpdates: Partial<{
			processId: Id<"processes">;
			dueDate: string;
		}> = {};

		if (updates.processId !== undefined) {
			deadlineUpdates.processId = updates.processId;
		}

		if (updates.dueDate !== undefined) {
			deadlineUpdates.dueDate = updates.dueDate;
		}

		return await ctx.db.patch(id, deadlineUpdates);
	},
});
