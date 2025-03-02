"use client";

import { useRouter } from "next/navigation";
import Head from "next/head";
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

  const handleOpenRegister = () => {
    router.push("/register");
  };

  return (
    <>
      <Head>
        <title>Metaverse Conference 2024 | Future of Virtual Worlds</title>
        <meta name="description" content="Join the ultimate Metaverse Conference with industry leaders and cutting-edge technology insights." />
        <meta property="og:title" content="Metaverse Conference 2024" />
        <meta property="og:description" content="Explore the future of the Metaverse with top speakers, interactive sessions, and networking opportunities." />
        <meta property="og:image" content="/metaverse-banner.jpg" />
        <meta property="og:url" content="https://www.example.com" />
        <link rel="canonical" href="https://www.example.com" />
      </Head>

      <Analytics />

      <main className="min-h-screen bg-background">
        <div className="absolute inset-0 grid-background -z-10" aria-hidden="true" />

        <div className="h-full flex flex-col">
          <Navbar className="flex-shrink-0" setIsOpen={handleOpenRegister} />

          <div className="flex-1 overflow-y-auto">
            <div className="h-full">
              <RegisterWrapper setIsOpen={handleOpenRegister} />
              <KeyHighlights />
              <MetaverseSection />
              <Features id="key-topics" />
              <Schedule />
              <WhyAttend id="whyattend" />
              <Footer />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
