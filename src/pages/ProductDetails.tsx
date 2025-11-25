import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from "@/components/ui/scroll-area"

const ProductDetails = () => {
  const { productId } = useParams<{ productId: string }>();
  // Placeholder product data (replace with actual data fetching)
  const product = {
    id: productId,
    name: 'Adidas Shoe ' + productId,
    description: 'High-performance Adidas shoe designed for ultimate comfort and style. Perfect for running, training, or everyday wear.',
    images: [
      `https://images.unsplash.com/photo-1542296637-5ad10f403f22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWRpZGFzJTIwc2hvZXN8ZW58MHx8MHx8MTY3ODg4MjU1Nw&auto=format&fit=crop&w=800&q=60`,
      `https://images.unsplash.com/photo-1586310244482-7b697a7c983e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fDE2Nzg4ODI1NTd8&auto=format&fit=crop&w=800&q=60`,
      `https://images.unsplash.com/photo-1600350847441-749b26199b14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkaWRhcyUyMHNob2VzfGVufDB8fDB8fDE2Nzg4ODI1NTd8&auto=format&fit=crop&w=800&q=60`
    ],
    price: 129.99,
    sizes: [7, 8, 9, 10, 11],
    colors: ['Black', 'White', 'Blue'],
    reviews: [
      { id: '1', author: 'John Doe', rating: 5, comment: 'Great shoes! Very comfortable.' },
      { id: '2', author: 'Jane Smith', rating: 4, comment: 'Good quality and stylish design.' },
    ],
  };

  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);

  const handleSizeSelect = (size: number) => {
    setSelectedSize(size);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.3 } },
  };

  return (
    <motion.div
      className="bg-gray-50 min-h-screen py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:space-x-8">
          <motion.div
            className="lg:w-1/2 mb-6 lg:mb-0"
            variants={imageVariants}
          >
          <ScrollArea className="h-[500px] w-full rounded-md border">
            <div className="carousel-container flex snap-x overflow-x-auto">
              {product.images.map((image, index) => (
                <div key={index} className="carousel-item snap-start first:pl-0 last:pr-0">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={image}
                      alt={`Adidas Shoe - Image ${index + 1}`}
                      className="object-cover rounded-md"
                    />
                  </AspectRatio>
                </div>
              ))}
            </div>
            </ScrollArea>
          </motion.div>

          <div className="lg:w-1/2">
            <Card className="mb-4">
              <div className="p-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex items-center mb-4">
                  <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                </div>

                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Sizes</h2>
                  <div className="flex space-x-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant={selectedSize === size ? 'secondary' : 'outline'}
                        onClick={() => handleSizeSelect(size)}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Colors</h2>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <Button
                        key={color}
                        variant={selectedColor === color ? 'secondary' : 'outline'}
                        onClick={() => handleColorSelect(color)}
                      >
                        {color}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button className="w-full">Add to Cart</Button>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Reviews</h2>
                {product.reviews.map((review) => (
                  <div key={review.id} className="mb-4">
                    <div className="flex items-center mb-1">
                      <span className="font-semibold text-gray-900 mr-2">{review.author}</span>
                      <span className="text-gray-500">({review.rating}/5)</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductDetails;
