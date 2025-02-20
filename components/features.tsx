"use client";

import { motion } from "framer-motion";
import { 
  Brain, 
  Users, 
  Lightbulb,
  Rocket,
  Shield,
  Cpu
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Technical Deep Dives",
    description: "Advanced sessions on neural networks, machine learning, and more",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Networking Events",
    description: "Connect with industry leaders and potential collaborators",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation Showcase",
    description: "Experience cutting-edge AI demos and applications",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Startup Pitch",
    description: "Watch AI startups pitch their revolutionary ideas",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "AI Ethics Track",
    description: "Discussions on responsible AI development",
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Hands-on Labs",
    description: "Practice with the latest AI tools and frameworks",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-background" id="features">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Summit Features</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Discover what makes the Austin AI Summit a must-attend event
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-lg text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/80">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}