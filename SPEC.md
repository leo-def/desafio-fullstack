# Desafio Fullstack - Technical Specification

> Full-stack mentor management system built with NestJS (API) + Next.js (webapp).
> Growdev technical challenge demonstrating full-stack TypeScript with Prisma ORM and rich context-based state management.

## Executive Summary

Desafio Fullstack is a **Growdev technical challenge** implementing a mentor CRUD application. The backend is a **NestJS** REST API with Prisma + PostgreSQL, generic pagination service, global exception filters, and response interceptors. The frontend is a **Next.js 13+ App Router** application with Tailwind CSS, featuring a rich context-based state management system (theme, sidebar, message, waiting, manage) and a configurable collection component supporting both table and grid views.

---

## 1. Problem Statement

### Context
Growdev technical challenge: implement a full-stack mentor management system with create, read, update, delete, pagination, and filtering.

### Goals
- REST API for mentor CRUD with CPF uniqueness constraint
- Paginated, filterable, and sortable mentor listing
- Frontend collection with table and grid view modes
- Responsive UI with dark/light theme toggle
- Docker Compose orchestration

### Success Metrics
- [x] NestJS API with Prisma ORM (PostgreSQL)
- [x] `POST /mentor/fetch` — paginated + filtered + sorted queries
- [x] Frontend collection (table + grid), form, filters
- [x] Context-based state management for 5 domains (theme, sidebar, message, waiting, manage)
- [x] Unit tests for components and services
- [ ] Authentication / authorization
- [ ] Mentor photo upload

---

## 2. Technology Stack

**Backend (api/)**
| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | NestJS | Latest |
| Language | TypeScript | 5.x |
| ORM | Prisma | Latest |
| Database | PostgreSQL | 15+ |
| API Docs | Swagger (@nestjs/swagger) | Latest |
| Testing | Jest | Latest |

**Frontend (webapp/)**
| Component | Technology | Version |
|-----------|-----------|---------|
| Framework | Next.js | 13+ (App Router) |
| Styling | Tailwind CSS | 3.x |
| State | React Context + useReducer | - |
| Testing | Jest + React Testing Library | Latest |

---

## 3. Architecture

```
┌─────────────────────────────────────────┐
│     Next.js Frontend (webapp/)           │
│  Route: /mentor (App Router)             │
│  MentorManage → collection + form        │
│  Contexts: theme, sidebar, message,      │
│            waiting, manage               │
└──────────────────┬──────────────────────┘
                   │ REST API (fetch)
                   ▼
┌──────────────────────────────────────────┐
│      NestJS Backend (api/)               │
│  MentorController   /mentor              │
│  PaginationService (generic Prisma)      │
│  TransformInterceptor                    │
│  GlobalExceptionFilter                   │
└──────────────────┬───────────────────────┘
                   │ Prisma Client
                   ▼
            PostgreSQL Database
```

---

## 4. Module Structure

**Backend:**
```
src/
  mentor/
    _controllers/mentor.controller.ts      # ⚠️ Bug: @Get() missing :id
    _services/mentor.service.ts
    _dtos/                                 # CreateMentorDTO, UpdateMentorDTO, pagination DTOs
    _types/                                # Internal types
  pagination/
    _services/pagination.service.ts        # Generic Prisma paginator
  api/
    _filters/exception.filter.ts
    _interceptors/transform.interceptor.ts
  prisma/
    prisma.module.ts
```

**Frontend:**
```
src/
  mentor/
    _components/mentorManage.tsx           # CRUD orchestrator
    _components/mentorFormDisplay.tsx      # Create/edit form
    _components/mentorColumnDisplay.tsx    # Table column renderer
    _components/mentorGridItemDisplay.tsx  # Grid card renderer
    _components/mentorFilterDisplay.tsx    # Filter panel
  commons/
    manage/                    # Reusable data-management context (pagination, selection, actions)
    theme/                     # Dark/light theme (localStorage + CSS variable)
    sidebar/                   # Drawer open/close state
    message/                   # Toast notification queue
    waiting/                   # Loading spinner / skeleton state
    api/_hooks/useApiFetch.ts  # Generic fetch hook with waiting integration
```

---

## 5. API Endpoints

```
GET    /mentor         # ⚠️ Get mentor by ID — BUG: id is always undefined
POST   /mentor/fetch   # Paginated list (filter, sort, pagination in body)
POST   /mentor         # Create mentor
PUT    /mentor/:id     # Update mentor
DELETE /mentor/:id     # Delete mentor
GET    /health         # Prisma health check
```

---

## 6. Data Models

```prisma
model Mentor {
  id        String    @id @default(cuid())
  name      String
  cpf       String    @unique
  email     String                    // ⚠️ NOT unique — duplicate emails allowed
  createdAt DateTime  @default(now())
  createdBy String?
  updatedAt DateTime? @updatedAt
  updatedBy String?
}
```

---

## 7. Testing Strategy

```bash
cd api && npm test              # Unit tests
cd api && npm run test:e2e      # E2E (Jest + Supertest)
cd webapp && npm test           # Component tests (RTL)
```

Tests exist for all controllers, services, and frontend components.

---

## 8. Deployment & Operations

```bash
docker-compose up               # API + PostgreSQL
cd api && npm run start:dev     # Dev with hot-reload
cd webapp && npm run dev        # Next.js dev server (port 3000)
```

**Env (api):** `DATABASE_URL`, `PORT`  
**Env (webapp):** `NEXT_PUBLIC_API_URL`

---

## 9. Issues Found

### Critical Bug
- **`MentorController.find()` — `@Get()` decorator missing `/:id` path parameter**: The `@Get()` decorator has no path, but the function uses `@Param('id') id: string`. The route is `GET /mentor` (not `GET /mentor/:id`), so `id` is **always `undefined`**, causing all find-by-id requests to fail. Fix: change to `@Get(':id')`.

### Schema Issues
- **`email` field is not `@unique`** — two mentors can share the same email address.
- **No CPF format validation** in `CreateMentorDTO` — any string is accepted for CPF (should validate 11-digit Brazilian format with checksum).
- **No `@IsEmail()` decorator** on `email` field in the DTO.

### Missing
- No authentication — all endpoints are publicly accessible.
- `createdBy`/`updatedBy` fields are always `null` (no auth context).
- No soft delete — records are permanently deleted.
