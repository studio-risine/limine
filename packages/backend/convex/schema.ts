import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
	users: defineTable({
		name: v.string(),
		email: v.string(),
	}),
	deadlines: defineTable({
		register: v.string(),
	}),
	legalProcess: defineTable({
		register: v.number(),
	}),
});
