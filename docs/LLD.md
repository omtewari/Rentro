# Rentro — Low-Level Design

## API module convention
Each business module should contain, as needed:
- `*.routes.ts` — route definitions and middleware composition.
- `*.controller.ts` — HTTP request/response handling.
- `*.service.ts` — business rules and transaction orchestration.
- `*.repository.ts` — persistence queries (add when query complexity warrants it).
- `*.schema.ts` — request validation using shared Zod schemas.

## Request lifecycle
1. Express receives request.
2. Authentication middleware verifies access token.
3. Validation middleware parses request input.
4. Property authorization checks membership and permission.
5. Controller calls service.
6. Service uses Prisma transaction where atomicity is required.
7. Controller returns a consistent response envelope.

## Authentication
Use short-lived JWT access tokens and rotating refresh tokens. Persist refresh-token hashes or session identifiers, support revocation, and detect token reuse. Never store plaintext passwords or refresh tokens.

## Authorization
A user's global role is not sufficient. Resolve the user's membership for the target property and check the exact permission required by the operation.
