"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-blue-luxury-wall-waves-3d-rendered-abstract-architecture-background-for-presentations-image_3735894.jpg"
          alt="Conference background"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              to top,
              rgba(0, 0, 0, 0.8) 0%,
              rgba(0, 0, 0, 0.6) 30%,
              rgba(0, 0, 0, 0.4) 60%,
              rgba(0, 0, 0, 0.2) 80%,
              rgba(0, 0, 0, 0) 100%
            )`
          }}
        />
        {/* Gaussian Blur Effect */}
        <div 
          className="absolute inset-0 backdrop-blur-[2px]"
          style={{
            background: `linear-gradient(
              to top,
              rgba(0, 0, 0, 0.4) 0%,
              rgba(0, 0, 0, 0.3) 40%,
              rgba(0, 0, 0, 0.1) 70%,
              transparent 100%
            )`
          }}
        />
      </motion.div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <span className="px-3 py-1 text-sm font-semibold bg-black/20 backdrop-blur-md rounded-full inline-block mb-4 text-white">
              <Sparkles className="inline-block w-4 h-4 mr-2" />
              May 29-30, 2025 • Dallas, United States of America
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white"
          >
            ISF Global AI Summit 2025
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-white/90 mb-8"
          >
            Join the world's leading AI innovators, researchers, and entrepreneurs
            for three days of groundbreaking insights and networking.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="group bg-white text-black hover:bg-white/90"
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
