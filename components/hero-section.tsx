"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroSection({ setIsOpen }: { setIsOpen: (open: boolean) => void }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="relative w-full h-full">
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-blue-luxury-wall-waves-3d-rendered-abstract-architecture-background-for-presentations-image_3735894.jpg"
            alt="Conference background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-[2px]" />
        </div>
      </motion.div>

      <div className="container relative z-10 mx-auto">
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
            className="mb-4"
          >
            <span className="px-3 py-1 text-xs md:text-sm font-semibold bg-black/20 backdrop-blur-md rounded-full inline-block mb-3 text-white">
              <Sparkles className="inline-block w-4 h-4 mr-1" />
              May 29-30, 2025 • Austin, USA
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-tight"
          >
            ISF Global AI Summit 2025
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xs sm:text-sm md:text-base text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto"
          >
            Get ready to experience the future of leadership, technology, and strategy like never before!
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-row gap-2 sm:gap-4 justify-center"
          >
            <Button
              size="lg"
              className="group bg-blue-600 text-white hover:bg-blue-500"
              onClick={() => setIsOpen(true)}
            >
              Register Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10"
              onClick={() => window.open('https://www.isfnetwork.org/isf-global-ai-summit/', '_blank')}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}