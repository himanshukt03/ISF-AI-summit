"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  className?: string;
}

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 0));
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md" : "bg-transparent"
      } ${className || ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              ISF Global
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#speakers" className="text-foreground/80 hover:text-foreground">
                Speakers
              </Link>
              <Link href="#schedule" className="text-foreground/80 hover:text-foreground">
                Schedule
              </Link>
              <Link href="#features" className="text-foreground/80 hover:text-foreground">
                Features
              </Link>
              <Button variant="default" size="sm">
                Register Now
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-background/80 backdrop-blur-md">
            <Link
              href="#speakers"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-foreground/80 hover:text-foreground"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full" variant="default" size="sm">
                Register Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}