FROM node:20-slim

WORKDIR /app

COPY package.json pnpm-lock.yaml* ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

# Prisma Client generálása és TS build
RUN pnpm db:generate
RUN pnpm build

CMD ["pnpm", "start"]
