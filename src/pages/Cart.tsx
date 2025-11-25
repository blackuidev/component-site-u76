import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../CartContext';
import { motion } from 'framer-motion';

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const Cart: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(20); // Default shipping cost
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const newSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setSubtotal(newSubtotal);

    // Calculate total
    setTotal(subtotal + shippingCost);
  }, [cartItems, subtotal, shippingCost]);

  const handleRemove = (itemId: string) => {
    removeFromCart(itemId);
    toast.success('Item removed from cart!');
  };

  const handleQuantityChange = (itemId: string, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(itemId, newQuantity);
    } else {
      handleRemove(itemId);
    }
  };

  const cartVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="container mx-auto p-8 flex flex-col items-center justify-center"
        variants={cartVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-2xl font-semibold mb-4">Your cart is empty.</h2>
        <p className="text-gray-600 mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/" className="text-blue-500 hover:underline">
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mx-auto mt-10 p-4 md:p-8"
      variants={cartVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item: CartItem) => (
            <motion.div
              key={item.id}
              className="flex items-center border rounded-lg p-4 shadow-sm"
              layout
              transition={{ duration: 0.3 }}
            >
              <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-md mr-4" />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
                    +
                  </Button>
                </div>
              </div>
              <Button variant="destructive" size="sm" className="ml-auto" onClick={() => handleRemove(item.id)}>
                Remove
              </Button>
            </motion.div>
          ))}
        </div>

        <Card className="md:col-span-1">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
            <CardDescription>Review your order and proceed to checkout.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
            </div>
            <Separator className="my-4" />
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Proceed to Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </motion.div>
  );
};

export default Cart;
