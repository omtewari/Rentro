# Rentro

Rentro is an India-focused rental management and rewards platform. This repository uses a **Turborepo monorepo with npm workspaces** and a **modular monolith** backend.

## Architecture

- `apps/mobile` — React Native + Expo + TypeScript application.
- `apps/api` — Node.js + Express + TypeScript REST API.
- `apps/admin` — reserved for a future web administration dashboard.
- `packages/database` — PostgreSQL schema and Prisma client.
- `packages/contracts` — shared API/domain TypeScript contracts.
- `packages/validators` — shared Zod validation schemas.
- `packages/config` — shared configuration.
- `packages/utils` — framework-independent utilities.

The API is one deployable application, organized by business modules. Do not split these modules into microservices prematurely.

## Requirements

- Node.js 20.19+ (or a compatible newer LTS)
- npm 10+
- PostgreSQL 15+

## Getting started

```bash
cp .env.example apps/api/.env
npm install
```

Create the local PostgreSQL database named `rentro`, then run:

```bash
npm run db:generate
npm run db:migrate
npm run dev
```

The API runs on `http://localhost:4000`; health check: `GET /health`.

For the Expo app:

```bash
npm run dev --workspace=@rentro/mobile
```

## Workspace commands

```bash
npm run build
npm run typecheck
npm run lint
npm run db:studio
```

## Important security notes

- Keep secrets in environment variables; never commit `.env`.
- Enforce property-scoped authorization on every property, unit, tenant, agreement, and payment operation.
- A role name alone is not sufficient authorization: check the user's membership and granted permissions for the requested property.
- Store password hashes, not plaintext passwords.
- Implement refresh-token rotation, revocation, and reuse detection before production.
- Payment processing and any wallet/stored-value functionality must use appropriately regulated payment partners and compliant flows. Do not treat an ordinary Rentro database balance as customer funds.

## Documentation

See [`docs/`](docs/) for the HLD, LLD, ERM, and API documentation starting points.
