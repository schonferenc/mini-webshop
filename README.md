# 🛒 Mini Webshop

A modern full-stack e-commerce demo application built with **Angular 20** and **Node.js**.

[![Angular](https://img.shields.io/badge/Angular-20-red?logo=angular)](https://angular.dev)
[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://typescriptlang.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-17-blue?logo=postgresql)](https://postgresql.org)

## 🚀 Features

- **🛍️ Product Catalog** - Browse and view product details
- **🛒 Shopping Cart** - Session-based cart management
- **📱 Responsive Design** - Mobile-first UI/UX
- **⚡ Modern Stack** - Latest Angular & Node.js features
- **🔒 Secure** - Input validation, sanitization, CORS
- **🏗️ Clean Architecture** - Layered structure with separation of concerns

## 🛠️ Tech Stack

### Frontend (Angular 20)
- **Framework**: Angular 20 with Standalone Components
- **State Management**: Signals (Zoneless Change Detection)
- **UI**: SCSS with responsive grid design
- **Features**: SSR, Lazy Loading, Control Flow Syntax
- **HTTP Client**: Axios integration

### Backend (Node.js)
- **Runtime**: Node.js 18+ with TypeScript
- **Framework**: Express.js with modern middleware
- **Database**: PostgreSQL 17 with Prisma ORM
- **Architecture**: Controller → Service → Repository pattern
- **Security**: Helmet, CORS, input sanitization
- **Validation**: Joi schemas

## 📁 Project Structure

```
mini-webshop/
├── angular-mini-webshop/    # Angular 20 Frontend
│   ├── src/app/
│   │   ├── core/            # Services, guards, interceptors
│   │   ├── features/        # Page components (products, cart)
│   │   └── shared/          # Models, components
│   └── ...
├── api/                     # Node.js + Express Backend
│   ├── src/
│   │   ├── controllers/     # HTTP request handlers
│   │   ├── services/        # Business logic
│   │   ├── repositories/    # Data access layer
│   │   ├── middleware/      # Express middleware
│   │   └── types/          # TypeScript definitions
│   └── prisma/             # Database schema & migrations
└── README.md               # This file
```

## ⚡ Quick Start

### Prerequisites
- **Node.js** 18+ and **pnpm**
- **Docker** & **Docker Compose**
- **Git**

### 1. Clone the repository
```bash
git clone https://github.com/your-username/mini-webshop.git
cd mini-webshop
```

### 2. Backend Setup
```bash
cd api
pnpm install
pnpm run db:setup     # Starts PostgreSQL + runs migrations + seeds data
pnpm run dev          # Start development server (port 3000)
```

### 3. Frontend Setup
```bash
cd angular-mini-webshop
pnpm install
ng serve              # Start development server (port 4200)
```

### 4. Open the application
- **Frontend**: http://localhost:4200
- **API**: http://localhost:3000
- **Database Studio**: `pnpm run db:studio` (in api folder)

## 🗄️ Database

The application uses **PostgreSQL** with **Prisma ORM**:

- **Products**: E-commerce product catalog
- **Cart**: Session-based shopping carts
- **CartItems**: Items within carts

Sample data is automatically seeded with 8 demo tech products.

## 🎯 API Endpoints

### Products
- `GET /products` - List all products
- `GET /products/:id` - Get product details

### Shopping Cart
- `GET /cart/:sessionId` - Get cart contents
- `POST /cart/add` - Add item to cart
- `PUT /cart/item/:cartItemId` - Update item quantity
- `DELETE /cart/item/:cartItemId` - Remove item
- `DELETE /cart/:sessionId/clear` - Clear cart

## 🏗️ Architecture Highlights

### Frontend
- **Feature-based structure** with lazy-loaded routes
- **Signals** for reactive state management
- **Standalone components** with modern Angular patterns
- **Path mapping** (`src/*`) for clean imports
- **Responsive design** with CSS Grid

### Backend
- **Clean Architecture** with layered separation
- **TypeScript strict mode** for type safety
- **Path mapping** for professional imports
- **Prisma ORM** with type-safe database access
- **Validation middleware** with Joi schemas

## 🔧 Development Commands

### Backend (api/)
```bash
pnpm run dev          # Development server
pnpm run build        # Build for production
pnpm run db:studio    # Open Prisma Studio
pnpm run db:reset     # Reset database
```

### Frontend (angular-mini-webshop/)
```bash
ng serve              # Development server
ng build              # Build for production
ng test               # Run tests
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with modern **Angular 20** and **Node.js** best practices
- Designed as a **demo application** showcasing full-stack development
- Perfect for **learning** modern web development patterns

---

⭐ **Star this repository** if you find it helpful!