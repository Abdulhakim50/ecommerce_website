// seed.js
import prisma from "./libs/prisma";

// seed.js


async function seed() {
  try {
    // Generate an array of 30 products
    const productsToSeed = Array.from({ length: 30 }, (_, index) => ({
      name: `Product ${index + 1}`,
      description: `Description for Product ${index + 1}`,
      price: (Math.random() * 200).toFixed(2), // Random price up to 200.00
      brand: `Brand ${index + 1}`,
      category: `Category ${index % 5 + 1}`, // Assuming 5 categories
      inStock: Math.random() < 0.8, // 80% chance of being in stock
      images: [
        { color: 'WHITE', colorCode: '#FFFFFF', image: `https://firebasestorage.googleapis.com/v0/b/ecommerce-38591.appspot.com/o/products%2Fimage-${index + 1}.jpg?alt=media&token=e9bc015a-b7f2-4601-842b-be5f0629f240` },
        { color: 'Silver', colorCode: '#c0c0c0', image: `https://firebasestorage.googleapis.com/v0/b/ecommerce-38591.appspot.com/o/products%2Fimage-${index + 2}.jpg?alt=media&token=798e8a14-8830-4376-9f76-4ea0327d312d` },
        { color: 'Gray', colorCode: '#808080', image: `https://firebasestorage.googleapis.com/v0/b/ecommerce-38591.appspot.com/o/products%2Fimage-${index + 3}.jpg?alt=media&token=d41c35df-a360-4259-8f41-bbe2478c7606` },
        { color: 'Red', colorCode: '#FF0000', image: `https://firebasestorage.googleapis.com/v0/b/ecommerce-38591.appspot.com/o/products%2Fimage-${index + 4}.jpg?alt=media&token=1ea5bcff-e650-4d8b-83cc-255379d48d2a` },
      ],
    }));

    // Use Prisma to insert the products into the database
    await prisma.product.createMany({
      data: productsToSeed,
      include: {
        images: true,
      },
    });

    console.log('Seeding successful!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seed();

