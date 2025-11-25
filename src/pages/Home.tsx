import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to BlackUI Dev</h1>
        <p className="text-lg text-gray-400">Your source for modern UI components.</p>
        <Button className="mt-6 bg-white text-gray-900 hover:bg-gray-200">Explore Components</Button>
      </header>

      <section className="py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-semibold mb-8 text-center">Featured Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Button</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A simple and customizable button component.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Card</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A versatile card component for displaying information.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Input</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A styled input field for collecting user data.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Select</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A styled select component for choosing options.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Checkbox</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A styled checkbox component for boolean options.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg font-medium">Alert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-400">A styled alert to show important information.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-800">
        <h2 className="text-3xl font-semibold mb-8 text-center">About BlackUI Dev</h2>
        <p className="text-lg text-gray-400 text-center">
          BlackUI Dev is a collection of modern, reusable UI components built with React and Tailwind CSS. Our goal is to provide developers with
          high-quality, accessible components that can be easily integrated into any project.
        </p>
        <div className="flex justify-center mt-8">
          <Button className="bg-white text-gray-900 hover:bg-gray-200">Learn More</Button>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-500">
        &copy; {new Date().getFullYear()} BlackUI Dev. All rights reserved.
      </footer>
    </div>
  );
};

export default Home;
