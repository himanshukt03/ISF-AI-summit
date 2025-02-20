"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { KeyHighlights } from "@/components/key-highlights";
import { Speakers } from "@/components/speakers";
import { Schedule } from "@/components/schedule";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 grid-background -z-10" />
      
      {/* Create a scrollable container for the content */}
      <div className="h-full flex flex-col">
        {/* Fixed header */}
        <Navbar className="flex-shrink-0" />
        
        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto">
          <div className="h-full">
            <HeroSection />
            <KeyHighlights />
            <Speakers />
            <Schedule />
            <Features />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}