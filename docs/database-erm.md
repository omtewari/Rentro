# Rentro — Database ERM

The initial Prisma schema defines users, properties and property memberships. Extend it with units, tenants/occupancies, agreements, rent schedules, rent invoices, payment attempts, payment transactions, rewards ledger, notifications, refresh-token sessions and audit events as each feature is implemented.

```mermaid
erDiagram
    USER ||--o{ PROPERTY_MEMBERSHIP : has
    PROPERTY ||--o{ PROPERTY_MEMBERSHIP : grants
    USER {
        uuid id PK
        string full_name
        string phone UK
        string email UK
        string status
    }
    PROPERTY {
        uuid id PK
        uuid owner_id
        string name
        string address_line
        string city
        string state
        string postal_code
    }
    PROPERTY_MEMBERSHIP {
        uuid id PK
        uuid user_id FK
        uuid property_id FK
        string role
        string permissions
    }
```
