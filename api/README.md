# Mini Webshop API

A modern REST API built with Node.js, Express, TypeScript, and Prisma for a demo e-commerce application.

## 🚀 Features

- **Product Management**: List and view product details
- **Shopping Cart**: Session-based cart functionality
- **Data Validation**: Request validation with Joi
- **Security**: Helmet, CORS, input sanitization
- **Database**: PostgreSQL with Prisma ORM
- **TypeScript**: Full type safety
- **Clean Architecture**: Layered structure (Controllers → Services → Repositories)

## 📋 API Endpoints

### Products
- `GET /products` - Get all products
- `GET /products/:id` - Get product by ID

### Cart
- `GET /cart/:sessionId` - Get cart by session ID
- `POST /cart/add` - Add item to cart
- `PUT /cart/item/:cartItemId` - Update cart item quantity
- `DELETE /cart/item/:cartItemId` - Remove item from cart
- `DELETE /cart/:sessionId/clear` - Clear entire cart

## 🛠️ Prerequisites

- Node.js 18+ and pnpm
- Docker & Docker Compose
- PostgreSQL 17

## ⚡ Quick Start

1. **Clone and setup**
   ```bash
   cd api
   pnpm install
   ```

2. **Environment setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Database setup**
   ```bash
   pnpm run db:setup
   ```

4. **Start development server**
   ```bash
   pnpm run dev
   ```

API will be available at `http://localhost:3000`

## 📊 Database

The API uses PostgreSQL with Prisma ORM. Schema includes:

- **Product**: E-commerce products with pricing and inventory
- **Cart**: Session-based shopping carts
- **CartItem**: Items within carts with quantities

## 🧪 Development Commands

```bash
# Development
pnpm run dev              # Start with hot reload
pnpm run build           # Build for production
pnpm start              # Start production server

# Database
pnpm run db:setup        # Full database setup
pnpm run docker:up       # Start PostgreSQL container
pnpm run db:migrate:create # Create and run migration
pnpm run db:generate     # Generate Prisma client
pnpm run db:studio       # Open Prisma Studio
pnpm run db:seed         # Seed with demo data
pnpm run db:reset        # Reset database and reseed

# Docker
pnpm run docker:down     # Stop containers
pnpm run docker:clean    # Clean volumes and containers
```

## 🏗️ Project Structure

```
src/
├── client/              # External service clients (Prisma)
├── config/              # Configuration management
├── controllers/         # HTTP request handlers
│   ├── product/
│   └── cart/
├── middleware/          # Express middleware
├── repositories/        # Data access layer
├── services/            # Business logic layer
├── types/               # TypeScript type definitions
├── utils/               # Utility functions
└── validations/         # Request validation schemas
```

## 🔧 Configuration

Key environment variables:

- `DATABASE_URL`: PostgreSQL connection string
- `PORT`: Server port (default: 3000)
- `FRONTEND_URL`: Frontend URL for CORS
- `NODE_ENV`: Environment (development/production)

## 🛡️ Security Features

- **Helmet**: Security headers
- **CORS**: Cross-origin resource sharing
- **Input Sanitization**: HTML/XSS protection
- **Validation**: Request/parameter validation
- **Error Handling**: Secure error responses

## 📝 Demo Data

The database includes pre-seeded demo data:
- 8 sample tech products
- 2 demo shopping carts with items

## 🤝 Contributing

This is a demo project. For improvements:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details