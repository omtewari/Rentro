# Rentro — High-Level Design

## Architecture decision
Rentro V1 uses a **modular monolith**, not microservices. The API is one deployable Node.js/Express application with business modules and one PostgreSQL database.

## System components
- Expo mobile application for owners, co-managers and tenants.
- REST API for authentication, property management, agreements, rent, payments, rewards and notifications.
- PostgreSQL database accessed through Prisma.
- External payment provider integrations for payment collection and settlement.
- Notification providers for SMS, email and push notifications.

## Core principles
1. Property-scoped authorization is enforced server-side on every protected resource.
2. Co-manager access is limited by owner-granted permissions for each property.
3. Payment state changes are verified using provider webhooks and idempotency keys.
4. Sensitive actions are recorded in the audit module.
5. Keep payment orchestration separate from the domain's rent ledger.

## Deployment view
Mobile app -> HTTPS REST API -> modular application -> PostgreSQL / external providers.
