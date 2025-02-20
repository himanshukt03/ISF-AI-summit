"use client";

import { motion } from "framer-motion";
import { Brain, Globe, Users, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Expert Speakers",
    description: "Learn from 50+ world-class AI experts and industry leaders",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Networking",
    description: "Connect with 2000+ AI professionals and enthusiasts",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Workshops",
    description: "Hands-on sessions with cutting-edge AI technologies",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Impact",
    description: "Discover how AI is transforming industries worldwide",
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
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Experience an immersive journey into the future of artificial intelligence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
              <p className="text-foreground/80">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}