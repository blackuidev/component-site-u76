"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const shippingSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  address: z.string().min(5, { message: 'Address must be at least 5 characters.' }),
  city: z.string().min(2, { message: 'City must be at least 2 characters.' }),
  zipCode: z.string().regex(/^[0-9]{5}(?:-[0-9]{4})?$/, { message: 'Invalid Zip Code.' }),
  country: z.string().min(2, { message: 'Country must be at least 2 characters.' }),
});

type ShippingValues = z.infer<typeof shippingSchema>;

const Checkout = () => {
  const [orderSummary, setOrderSummary] = useState({
    subtotal: 199.99,
    shipping: 15.00,
    tax: 10.00,
    total: 224.99,
  });

  const form = useForm<ShippingValues>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      name: '',
      address: '',
      city: '',
      zipCode: '',
      country: '',
    },
  });

  const onSubmit = async (values: ShippingValues) => {
    // Simulate payment processing (replace with actual payment gateway integration)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Simulate successful checkout
    toast.success('Order placed successfully!', {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    // Clear the form or redirect to a confirmation page
    form.reset();
  };

  return (
    <motion.div
      className="container mx-auto py-12 px-4 md:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Shipping Information Form */}
        <motion.div
          className=""
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black text-white shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    Name
                  </Label>
                  <Input id="name" type="text" placeholder="John Doe" className="mt-1 bg-gray-800 border-gray-700 text-white" {...form.register('name')} />
                  {form.formState.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="address" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    Address
                  </Label>
                  <Input id="address" type="text" placeholder="123 Main St" className="mt-1 bg-gray-800 border-gray-700 text-white" {...form.register('address')} />
                  {form.formState.errors.address && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="city" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    City
                  </Label>
                  <Input id="city" type="text" placeholder="Anytown" className="mt-1 bg-gray-800 border-gray-700 text-white" {...form.register('city')} />
                  {form.formState.errors.city && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="zipCode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    Zip Code
                  </Label>
                  <Input id="zipCode" type="text" placeholder="12345" className="mt-1 bg-gray-800 border-gray-700 text-white" {...form.register('zipCode')} />
                  {form.formState.errors.zipCode && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.zipCode.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="country" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed">
                    Country
                  </Label>
                  <Input id="country" type="text" placeholder="USA" className="mt-1 bg-gray-800 border-gray-700 text-white" {...form.register('country')} />
                  {form.formState.errors.country && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.country.message}</p>
                  )}
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white">Place Order</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Order Summary */}
        <motion.div
          className=""
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-gray-900 to-black text-white shadow-xl rounded-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${orderSummary.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping:</span>
                <span>${orderSummary.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax:</span>
                <span>${orderSummary.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>${orderSummary.total.toFixed(2)}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Checkout;
