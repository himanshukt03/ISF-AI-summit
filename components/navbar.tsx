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
    return scrollY.onChange(() => setIsScrolled(scrollY.get() > 10));
  }, [scrollY]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-md"
          : "bg-transparent"
      } ${className || ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-white">
              ISF Global
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#metaverse" className="text-gray-300 hover:text-white">
                Metaverse Access
              </Link>
              <Link href="#schedule" className="text-gray-300 hover:text-white">
                Schedule
              </Link>
              <Link href="#features" className="text-gray-300 hover:text-white">
                Features
              </Link>
              <Button variant="default" size="sm">
                Register Now
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 p-2"
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
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/80 backdrop-blur-lg shadow-md">
            <Link
              href="#speakers"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Speakers
            </Link>
            <Link
              href="#schedule"
              className="block px-3 py-2 text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Schedule
            </Link>
            <Link
              href="#features"
              className="block px-3 py-2 text-gray-300 hover:text-white"
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
