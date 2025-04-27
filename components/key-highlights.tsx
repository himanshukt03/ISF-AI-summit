"use client";

import { motion } from "framer-motion";
import { Globe, Users, MessageCircle, Brain, BriefcaseBusiness, Trophy, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

interface Highlight {
  icon: JSX.Element;
  title: string;
  description: string;
}

const highlights: Highlight[] = [
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Industry Roundtables & Fireside Chats",
    description: "Expert insights & discussions on AI innovation for a global impact",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI Expo",
    description: "Cutting-edge AI solutions, robotics demos & interactive product pitches.",
  },
  {
    icon: <BriefcaseBusiness className="w-6 h-6" />,
    title: "AI Job Mela",
    description: "On-site & virtual recruitment fair with speed interviews & career coaching.",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Tech for Good Lab",
    description: "AI-driven solutions for community, education & sustainability.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Launchpad",
    description: "Curated AI start-up pitches with investor feedback & funding opportunities.",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "AI Innovation & ISF Awards",
    description: "Honoring trailblazers in AI & technology.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Networking Lounges",
    description: "Connect with CXOs, innovators & investors in interactive spaces.",
  },
];

export function KeyHighlights() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background" id="highlights">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Key Highlights</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Experience an immersive journey into the future of artificial intelligence.
          </p>
        </motion.div>

        {isMobile ? (
          <MobileHighlights />
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-6xl lg:mx-auto">
              {highlights.slice(0, 4).map((highlight, index) => (
                <HighlightCard key={index} highlight={highlight} index={index} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-5xl lg:mx-auto mt-10">
              {highlights.slice(4).map((highlight, index) => (
                <HighlightCard key={index + 4} highlight={highlight} index={index + 4} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

// --- Mobile Highlights ---

function MobileHighlights() {
  return (
    <div className="space-y-6">
      {highlights.map((highlight, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card p-6 rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl text-primary shrink-0">
              {highlight.icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold text-foreground mb-1">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground leading-snug">{highlight.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// --- Highlight Card for Desktop ---

function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card p-6 rounded-2xl bg-card shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center h-full"
    >
      <div className="w-16 h-16 flex items-center justify-center bg-primary/10 rounded-xl text-primary mb-4">
        {highlight.icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{highlight.title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{highlight.description}</p>
    </motion.div>
  );
}
