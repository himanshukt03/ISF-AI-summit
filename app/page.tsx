"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import RegisterWrapper from "@/components/register-wrapper";
import { KeyHighlights } from "@/components/key-highlights";
import { Speakers } from "@/components/speakers";
import { Schedule } from "@/components/schedule";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { MetaverseSection } from "@/components/metaverse";
import { WhyAttend } from "@/components/whyattend";
import RegisterPopup from "@/components/RegisterPopup";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 grid-background -z-10" />

      <div className="h-full flex flex-col">
        {/* Pass setIsOpen to Navbar */}
        <Navbar className="flex-shrink-0" setIsOpen={setIsOpen} />

        <div className="flex-1 overflow-y-auto">
          <div className="h-full">
            {/* Pass setIsOpen to RegisterWrapper */}
            <RegisterWrapper setIsOpen={setIsOpen} />  
            <KeyHighlights />
            <MetaverseSection />
            <Features />
            <Speakers />
            <Schedule />
            <WhyAttend />
            <Footer />
          </div>
        </div>
      </div>

      {/* Register Popup */}
      <RegisterPopup isOpen={isOpen} setIsOpen={setIsOpen} />
    </main>
  );
}
