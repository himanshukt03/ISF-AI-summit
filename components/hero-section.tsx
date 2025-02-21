"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
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
            )`,
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
            )`,
          }}
        />
      </motion.div>

      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Event Date */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="px-3 py-1 text-xs md:text-sm font-semibold bg-black/20 backdrop-blur-md rounded-full inline-block mb-3 text-white">
              <Sparkles className="inline-block w-4 h-4 mr-1" />
              May 29-30, 2025 • Austin, USA
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
          >
            ISF Global AI Summit 2025
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-white/90 mb-6 md:mb-8"
          >
           Get ready to experience the future of leadership, technology, and strategy like never before! The ISF Global Austin Summit 2025 is a gateway to the future, where leaders, visionaries, and disruptors come together to shape what&apos;s next.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row gap-2 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-blue-600 text-white hover:bg-blue-500"
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
