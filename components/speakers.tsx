"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter } from "lucide-react";

const speakers = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director, TechCorp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Leading research in neural networks and deep learning",
  },
  {
    name: "Michael Rodriguez",
    role: "CEO, AI Innovations",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Pioneer in AI-driven business transformation",
  },
  {
    name: "Dr. Emily Wong",
    role: "Professor of AI Ethics",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Expert in responsible AI development",
  },
  {
    name: "James Wilson",
    role: "Chief AI Architect",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    bio: "Specializing in large language models",
  },
];

export function Speakers() {
  return (
    <section className="py-20 bg-background" id="speakers">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Speakers</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Learn from industry leaders and AI pioneers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center group"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
              <p className="text-primary mb-2">{speaker.role}</p>
              <p className="text-foreground/80 text-sm mb-4">{speaker.bio}</p>
              <div className="flex justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
                <Linkedin className="w-5 h-5 cursor-pointer hover:text-primary" />
                <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}