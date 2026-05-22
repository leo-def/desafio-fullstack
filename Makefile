# Root Makefile for Desafio Fullstack (NestJS API + Next.js Webapp)

.PHONY: all
all: build

# Install dependencies in both projects
.PHONY: install
install:
	cd api && npm install
	cd webapp && npm install

# Build both API (generating Prisma client) and Webapp
.PHONY: build
build:
	cd api && npx prisma generate && npm run build
	cd webapp && npm run build

# Run tests
.PHONY: test
test:
	cd api && npm run test
	cd webapp && npm run test

# Run the dev environment using Docker Compose
.PHONY: dev
dev:
	docker-compose up --build

# Run database migrations locally
.PHONY: migrate
migrate:
	cd api && npx prisma migrate dev

# Stop Docker Compose containers
.PHONY: down
down:
	docker-compose down

# Clean build folders
.PHONY: clean
clean:
	cd api && rm -rf dist/
	cd webapp && rm -rf .next/ out/ dist/
