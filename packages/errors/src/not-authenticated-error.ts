import { BaseError } from "./base-error.js";

export class NotAuthenticatedError extends BaseError {
	constructor(message = "User is not authenticated") {
		super(message, "NOT_AUTHENTICATED", 401);
	}
}
