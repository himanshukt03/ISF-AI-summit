"use client";

import { useRouter } from "next/navigation";
import { Analytics } from "@vercel/analytics/react"; 
import { Navbar } from "@/components/navbar";
import RegisterWrapper from "@/components/register-wrapper";
import { KeyHighlights } from "@/components/key-highlights";
import { Schedule } from "@/components/schedule";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { MetaverseSection } from "@/components/metaverse";
import { WhyAttend } from "@/components/whyattend";

export default function Home() {
  const router = useRouter();

  // Function to handle redirection to the register page
  const handleOpenRegister = () => {
    router.push("/register");
  };

  return (
    <main className="h-screen overflow-hidden bg-background">
      <div className="fixed inset-0 grid-background -z-10" />

      <div className="h-full flex flex-col">
        {/* Pass handleOpenRegister to Navbar instead of setIsOpen */}
        <Navbar className="flex-shrink-0" setIsOpen={handleOpenRegister} />

        <div className="flex-1 overflow-y-auto">
          <div className="h-full">
            {/* Pass handleOpenRegister to RegisterWrapper instead of setIsOpen */}
            <RegisterWrapper setIsOpen={handleOpenRegister} />
            <KeyHighlights />
            <MetaverseSection />
            <Features />
            <Schedule />
            <WhyAttend />
            <Footer />
          </div>
        </div>
      </div>
      <Analytics />
    </main>
  );
}
