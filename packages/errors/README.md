
# @workspace/errors

A package for error handling in the Limine monorepo, providing consistent and typed error classes for use across different repositories.

## Installation

```bash
pnpm add @workspace/errors
```

## Usage

### NotAuthenticatedError

Error thrown when a user is not authenticated.

```typescript
import { NotAuthenticatedError } from "@workspace/errors";

// With default message
throw new NotAuthenticatedError();

// With custom message
throw new NotAuthenticatedError("User not authenticated for this operation");
```

### Error Properties

All errors extend `BaseError` and include the following properties:

- `name`: Error class name
- `message`: Error message
- `code`: Unique error code (e.g., "NOT_AUTHENTICATED")
- `statusCode`: Corresponding HTTP status code
- `isOperational`: Indicates if it is an operational error
- `stack`: Error stack trace

### Example Usage in Backend

```typescript
import { NotAuthenticatedError } from "@workspace/errors";

export const create = mutation({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (identity === null) {
      throw new NotAuthenticatedError();
    }
    
    // Continue with logic...
  },
});
```

## Extension

To add new error types, extend the `BaseError` class:

```typescript
import { BaseError } from "@workspace/errors";

export class NotFoundError extends BaseError {
  constructor(resource: string) {
    super(`${resource} not found`, "NOT_FOUND", 404);
  }
}
```

## Error Codes

| Error                  | Code              | HTTP Status |
|------------------------|-------------------|-------------|
| NotAuthenticatedError  | NOT_AUTHENTICATED | 401         |

## Scripts

- `pnpm build`: Compiles the package to JavaScript
- `pnpm dev`: Compiles in watch mode
- `pnpm check-types`: Checks types without compiling
