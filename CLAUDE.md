# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a full-stack mini webshop application with two main components:

- **angular-mini-webshop/**: Angular 20 frontend application with SSR support
- **api/**: Node.js/Express backend API with Prisma ORM and PostgreSQL database

## Development Commands

### Frontend (Angular)
Navigate to `angular-mini-webshop/` directory:
- `pnpm start` or `ng serve` - Start development server (http://localhost:4200)
- `ng build` - Build for production
- `ng build --watch --configuration development` - Build in watch mode for development
- `ng test` - Run unit tests with Karma
- `ng e2e` - Run end-to-end tests
- `ng generate component component-name` - Generate new component

### Backend (API)
Navigate to `api/` directory:
- `pnpm run dev` - Start development server with nodemon
- `pnpm run build` - Build TypeScript to JavaScript
- `pnpm start` - Start production server
- `pnpm run docker:up` - Start PostgreSQL database container
- `pnpm run docker:down` - Stop database container
- `pnpm run db:migrate:create` - Create and run database migration
- `pnpm run db:generate` - Generate Prisma client
- `pnpm run db:reset` - Reset database and run seed
- `pnpm run db:studio` - Open Prisma Studio
- `pnpm run db:seed` - Seed database with sample data

## Architecture

### Frontend Architecture
- **Features**: Page-level components organized by feature (home, products, product, cart)
- **Core Services**: Centralized services for API communication and business logic
- **Shared Models**: TypeScript interfaces for data structures (Product, CartItem)
- **HTTP Service**: Centralized HTTP client using Axios for API communication
- **Environment Configuration**: Environment-based configuration in `core/config/`

### Backend Architecture
- **Controllers**: Handle HTTP requests and responses
- **Services**: Business logic layer
- **Repositories**: Data access layer using Prisma
- **Middleware**: Request processing (validation, sanitization, error handling)
- **Types**: TypeScript type definitions
- **Database**: PostgreSQL with Prisma ORM

### Database
- **Provider**: PostgreSQL running in Docker container (port 5433)
- **ORM**: Prisma with single Product model
- **Migrations**: Version-controlled schema changes
- **Seeding**: Sample data generation

## Development Setup

1. Start database: `cd api && pnpm run docker:up`
2. Setup database: `cd api && pnpm run db:setup`
3. Start backend: `cd api && pnpm run dev`
4. Start frontend: `cd angular-mini-webshop && pnpm start`

## Code Style

- **Frontend**: Angular style guide, SCSS for styling, Prettier configuration included
- **Backend**: TypeScript with Express patterns, input validation and sanitization
- **Database**: Prisma schema with camelCase naming

## Key Dependencies

- **Frontend**: Angular 20, RxJS, Axios, Express (SSR)
- **Backend**: Express, Prisma, Joi validation, Helmet security, CORS
- **Database**: PostgreSQL 17, Docker Compose