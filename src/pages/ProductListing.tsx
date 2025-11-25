import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  description: string;
}

const ProductListing: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Option 1: Fetch from a local JSON file (ensure /public/data/products.json exists)
        // const response = await axios.get<Product[]>('/data/products.json');

        // Option 2: Fetch from a mock API endpoint (replace with your actual API endpoint)
        const response = await axios.get<Product[]>('https://65f6af43626492029c5f1844.mockapi.io/products');
        setProducts(response.data);
        setLoading(false);
      } catch (e: any) {
        setError(e.message || 'Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-black text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Adidas Shoes</h1>
          <p className="text-lg text-gray-300">Step into style and performance with the latest Adidas shoe collection.</p>
        </div>
      </section>

      {/* Filter/Sort Section */}
      <section className="container mx-auto py-6">
        {/* Implement filter and sort functionality here */}
        <h2 className="text-2xl font-semibold mb-4">Filters and Sorting</h2>
        <p className="text-gray-600">[Placeholder for filter and sorting options]</p>
      </section>

      {/* Product Listing */}
      <section className="container mx-auto py-8">
        <h2 className="text-3xl font-semibold mb-6 text-center">Our Products</h2>

        {loading && <p className="text-center">Loading products...</p>}
        {error && <p className="text-center text-red-500">Error: {error}</p>}

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={item} className="hover:scale-105 transition-all duration-300">
              <Card className="shadow-md">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover rounded-md"
                    style={{ aspectRatio: '4 / 3' }}
                  />
                </AspectRatio>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  <Button className="mt-4 w-full">View Details</Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Adidas Innovation</h2>
          <p className="text-gray-700 mb-8">
            Discover the cutting-edge technology behind Adidas shoes, designed for peak performance and ultimate comfort.
          </p>
          {/* Add specific skills/tech details here */}       
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Boost Technology</h3>
              <p className="text-gray-600">Revolutionary cushioning for unmatched energy return.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Primeknit Upper</h3>
              <p className="text-gray-600">Seamless and adaptive fit for enhanced comfort.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Continental Rubber</h3>
              <p className="text-gray-600">Superior grip and durability on any surface.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Customer Reviews</h2>
          {/* Implement testimonials slider or grid here */}
          <p className="text-gray-600 text-center">[Placeholder for customer testimonials]</p>
        </div>
      </section>
    </div>
  );
};

export default ProductListing;
