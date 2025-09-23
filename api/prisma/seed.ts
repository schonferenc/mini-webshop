import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.cartItem.deleteMany({});
  await prisma.cart.deleteMany({});
  await prisma.product.deleteMany({});

  // Create products
  const products = await Promise.all([
    prisma.product.create({
      data: {
        name: 'Gaming Laptop',
        description: 'Erős gaming laptop RGB világítással',
        price: 899.99,
        stock: 15,
        imageUrl: 'https://picsum.photos/300/300?random=1',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Wireless Gaming Mouse',
        description: 'Precíz vezeték nélküli gaming egér',
        price: 49.99,
        stock: 45,
        imageUrl: 'https://picsum.photos/300/300?random=2',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Mechanical Keyboard',
        description: 'RGB mechanikus billentyűzet',
        price: 129.99,
        stock: 30,
        imageUrl: 'https://picsum.photos/300/300?random=3',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Gaming Headset',
        description: 'Prémium gaming fejhallgató mikrofonnal',
        price: 79.99,
        stock: 25,
        imageUrl: 'https://picsum.photos/300/300?random=4',
      },
    }),
    prisma.product.create({
      data: {
        name: 'USB-C Hub',
        description: 'Multiport USB-C dokkoló állomás',
        price: 39.99,
        stock: 60,
        imageUrl: 'https://picsum.photos/300/300?random=5',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Webcam HD',
        description: '1080p webkamera streaming-hez',
        price: 29.99,
        stock: 40,
        imageUrl: 'https://picsum.photos/300/300?random=6',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Portable SSD',
        description: '1TB hordozható SSD meghajtó',
        price: 149.99,
        stock: 20,
        imageUrl: 'https://picsum.photos/300/300?random=7',
      },
    }),
    prisma.product.create({
      data: {
        name: 'Phone Stand',
        description: 'Állítható telefon és tablet tartó',
        price: 12.99,
        stock: 80,
        imageUrl: 'https://picsum.photos/300/300?random=8',
      },
    }),
  ]);

  // Create demo carts with items
  const demoCart1 = await prisma.cart.create({
    data: {
      sessionId: 'demo-session-1',
      items: {
        create: [
          {
            productId: products[1].id, // Gaming Mouse
            quantity: 1,
          },
          {
            productId: products[2].id, // Mechanical Keyboard
            quantity: 1,
          },
        ],
      },
    },
  });

  const demoCart2 = await prisma.cart.create({
    data: {
      sessionId: 'demo-session-2',
      items: {
        create: [
          {
            productId: products[0].id, // Gaming Laptop
            quantity: 1,
          },
          {
            productId: products[3].id, // Gaming Headset
            quantity: 2,
          },
          {
            productId: products[7].id, // Phone Stand
            quantity: 1,
          },
        ],
      },
    },
  });

  console.log(`✅ Létrehozva ${products.length} termék`);
  console.log(`✅ Létrehozva 2 demo kosár`);
}

main()
  .then(() => console.log('✅ Seed kész'))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });