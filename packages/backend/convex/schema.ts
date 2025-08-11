import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string(),
	}),

	processes: defineTable({
		register: v.string(),
		client: v.string(),
		opposingParty: v.union(v.string(), v.null()),
		status: v.union(
			v.literal("open"),
			v.literal("closed"),
			v.literal("pending"),
			v.null(),
		),
	}).index("by_register", ["register"]),

	deadlines: defineTable({
		processId: v.id("processes"),
		dueDate: v.string(),
	}).index("processId", ["processId"]),
});
