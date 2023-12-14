import prisma from "@/libs/prisma";



export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { catagory, query } = req.query;

    try {
      const products = await prisma.product.findMany({
        where: {
          catagory,
          name: {
            contains: query,
            mode: 'insensitive', // Case-insensitive search
          },
        },
      });

      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
