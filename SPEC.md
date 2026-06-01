# Desafio Fullstack - Technical Specification

> Technical specification for the Growdev Mentor Management Full-Stack Application.
> Reference for understanding complete CRUD application architecture across frontend, backend, and database.

## Executive Summary

- **Project**: Desafio Fullstack (Growdev Mentor Manager)
- **Type**: Full-stack web application with choice of frontend framework
- **Languages**: JavaScript/TypeScript (Node.js backend, Vue/React/Angular frontend)
- **Database**: PostgreSQL
- **Status**: Active Development
- **Owner**: Development team

---

## 1. Problem Statement

### Context
Desafio Fullstack is a takeover challenge for Growdev that requires building a complete mentor management system. Candidates select a frontend framework (Vue.js, React, or Angular) and implement full CRUD operations for mentors with pagination, filtering, and validation.

### Goals
- **Primary**: Implement mentor CRUD management with pagination and filtering
- **Secondary**: Demonstrate full-stack integration across frontend, API, and database
- **Tertiary**: Apply responsive design and modern UI patterns

### Success Metrics
- [x] List mentors with pagination and line count selection
- [x] Create/edit mentor with form validation
- [x] Delete mentor with confirmation
- [x] Filter mentors by name, CPF, email
- [x] API returns proper error messages
- [x] Responsive design (desktop/tablet)
- [ ] >80% code coverage
- [ ] Lighthouse score >80

---

## 2. Technology Stack

| Component | Technology | Version | Rationale |
|-----------|-----------|---------|-----------|
| Frontend | Vue.js / React / Angular | Latest | Candidate choice |
| Backend | Node.js + Express | 18.0+ | JavaScript full-stack |
| Database | PostgreSQL | 12+ | Production-grade relational DB |
| Language | JavaScript/TypeScript | ES6+ | Modern syntax, type safety |
| ORM | Sequelize / TypeORM | Latest | Database abstraction |
| Validation | Joi / Yup / express-validator | Latest | Input validation |
| Styling | Tailwind / Bootstrap | Latest | Responsive UI framework |
| API Docs | Swagger/OpenAPI | 3.0 | Auto-generated API documentation |

### Project Dependencies
- Frontend: `@vue/cli` or `create-react-app` or `@angular/cli`
- Backend: `express`, `sequelize`, `joi`, `bcrypt`
- Database: PostgreSQL driver (`pg` or `pg-promise`)

---

## 3. Architecture

### Full-Stack Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                   Frontend (Browser)                        │
│  Vue.js / React / Angular + Tailwind/Bootstrap              │
└────────────────────┬────────────────────────────────────────┘
                     │ HTTP/REST
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                  Express API Backend                        │
│           (/api/mentors, /api/mentors/:id)                 │
└────────────────────┬────────────────────────────────────────┘
                     │ SQL
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    PostgreSQL                               │
│              (mentors table + schema)                       │
└─────────────────────────────────────────────────────────────┘
```

### Data Flow - List Mentors

```
Frontend
  ↓
GET /api/mentors?page=1&limit=10&search=John
  ↓
Backend (Express)
  - Validate query params
  - Query DB with LIMIT/OFFSET
  - Filter by name/cpf/email
  ↓
PostgreSQL
  - Execute SELECT with WHERE + LIMIT + OFFSET
  - Return filtered, paginated results
  ↓
Backend
  - Format response { data: [], pagination: { ... } }
  ↓
Frontend
  - Display table with pagination controls
```

---

## 4. API Endpoints

### REST Endpoints

```
GET    /api/mentors              # List mentors (paginated)
  Query: page=1, limit=10, search=value

GET    /api/mentors/:id          # Get single mentor

POST   /api/mentors              # Create mentor
  Body: { name, cpf, email, ... }

PUT    /api/mentors/:id          # Update mentor
  Body: { name, cpf, email, ... }

DELETE /api/mentors/:id          # Delete mentor

GET    /swagger-ui.html          # API documentation
```

### Response Format

```json
// Success (List)
{
  "success": true,
  "data": [
    { "id": 1, "name": "John Doe", "cpf": "123.456.789-00", "email": "john@example.com" }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "pages": 3
  }
}

// Error
{
  "success": false,
  "error": "Mentor not found"
}
```

---

## 5. Frontend Features (UI/UX)

### Pages

**Mentor List Page**:
- Table with columns: Name, CPF, Email, Actions (Edit, Delete)
- Pagination controls (prev, next, page numbers)
- Line count selector (10, 25, 50 per page)
- Filter inputs: name, CPF, email
- "Create Mentor" button at top
- Delete confirmation modal

**Mentor Form Page** (Create/Edit):
- Form fields: Name (required), CPF (format validation), Email (format validation)
- Form buttons: Save, Cancel
- Success/error notifications
- Disabled submit while loading

---

## 6. Database Schema

### Mentors Table

```sql
CREATE TABLE mentors (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  phone VARCHAR(20),
  bio TEXT,
  expertise VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  deleted_at TIMESTAMP NULL
);

CREATE INDEX idx_mentors_name ON mentors(name);
CREATE INDEX idx_mentors_cpf ON mentors(cpf);
CREATE INDEX idx_mentors_email ON mentors(email);
```

---

## 7. Key Validation Rules

- **Name**: Required, 2-255 characters
- **CPF**: Required, unique, valid format (123.456.789-00)
- **Email**: Required, unique, valid email format
- **All fields**: Trimmed, no leading/trailing whitespace

