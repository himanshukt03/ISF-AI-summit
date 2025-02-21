"use client";
import { motion } from "framer-motion";
import { Globe, Users, Zap, MessageCircle, Brain, BriefcaseBusiness, Trophy, Rocket } from "lucide-react";

const highlights = [
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
  return (
    <section className="py-20 bg-background" id="highlights">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Highlights</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Experience an immersive journey into the future of artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:max-w-6xl lg:mx-auto">
          {highlights.slice(0, 4).map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} index={index} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:max-w-4xl lg:mx-auto justify-center mt-8">
          {highlights.slice(4).map((highlight, index) => (
            <HighlightCard key={index} highlight={highlight} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Highlight {
  icon: JSX.Element;
  title: string;
  description: string;
}

function HighlightCard({ highlight, index }: { highlight: Highlight; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center rounded-xl bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between w-full max-w-xs mx-auto min-h-[250px]"
    >
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
        {highlight.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 min-h-[56px] flex items-center justify-center">{highlight.title}</h3>
      <p className="text-foreground/60 text-sm min-h-[48px] flex items-center justify-center">{highlight.description}</p>
    </motion.div>
  );
}
