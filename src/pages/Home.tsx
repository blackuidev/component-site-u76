"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton"

const fadeInAnimation = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  viewport: { once: true },
};

const parallax = (distance: number) => ({
  whileInView: { y: distance, transition: { duration: 0.8, ease: "linear" } },
  viewport: { once: true },
});

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen py-20">
      <motion.section
        className="container mx-auto px-6 md:px-12 lg:px-24 py-12 text-center"
        {...fadeInAnimation}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Welcome to My Animated Portfolio</h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8">A showcase of my skills and projects with delightful animations.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
          Explore My Work
        </Button>
      </motion.section>

      <motion.section
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16"
        {...fadeInAnimation}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div {...parallax(-50)}>
            <Avatar className="w-48 h-48 rounded-full mx-auto mb-4">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="User Avatar"/>
            </Avatar>
            <p className="text-lg text-muted-foreground text-center">
              I'm a passionate developer with a love for creating beautiful and functional web experiences. I specialize in React, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
          <motion.div {...parallax(50)}>
            <p className="text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16"
        {...fadeInAnimation}
      >
        <h2 className="text-3xl font-semibold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div {...parallax(-30)}>
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Project 1</CardTitle>
                <CardDescription>A brief description of the project.</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-48 mb-4"/>
                <p className="text-sm text-muted-foreground">Technologies used: React, Tailwind CSS, Firebase</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div {...parallax(30)}>
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Project 2</CardTitle>
                <CardDescription>Another interesting project.</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-48 mb-4"/>
                <p className="text-sm text-muted-foreground">Technologies used: Next.js, TypeScript, Prisma</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div {...parallax(-30)}>
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardHeader>
                <CardTitle>Project 3</CardTitle>
                <CardDescription>The third project in the showcase.</CardDescription>
              </CardHeader>
              <CardContent>
                <Skeleton className="w-full h-48 mb-4"/>
                <p className="text-sm text-muted-foreground">Technologies used: Vue.js, Node.js, MongoDB</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline">View Project</Button>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="container mx-auto px-6 md:px-12 lg:px-24 py-16 text-center"
        {...fadeInAnimation}
      >
        <h2 className="text-3xl font-semibold mb-8">Contact Me</h2>
        <p className="text-lg text-muted-foreground mb-8">Feel free to reach out for collaborations or inquiries.</p>
        <Button size="lg" className="bg-primary hover:bg-primary/90 transition-all duration-300">
          Contact
        </Button>
      </motion.section>
    </div>
  );
};

export default Home;
