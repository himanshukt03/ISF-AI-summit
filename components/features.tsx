"use client";

import { motion } from "framer-motion";
import { 
  HeartPulse, 
  Landmark, 
  Globe, 
  Shield, 
  Rocket 
} from "lucide-react";

interface FeaturesProps {
  id?: string;
}

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <HeartPulse className="w-8 h-8 text-red-400" />,
    title: "Next-Gen Health",
    description: "AI Across the Continuum",
  },
  {
    icon: <Landmark className="w-8 h-8 text-blue-400" />,
    title: "Capital Meets Innovation",
    description: "AI Investor Connect",
  },
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: "AI Everywhere",
    description: "Cross-Industry Impact",
  },
  {
    icon: <Shield className="w-8 h-8 text-purple-400" />,
    title: "GCC Without Borders",
    description: "AI, Operations & Data Privacy",
  },
  {
    icon: <Rocket className="w-8 h-8 text-yellow-400" />,
    title: "Future Forward",
    description: "AI, Work, & What Comes Next",
  },
];

export function Features({ id }: FeaturesProps) {
  return (
    <section className="py-20 bg-[#020817] text-white" id={id}>
      <div className="container px-6 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Roundtable Discussions
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Engage in thought-provoking discussions on AI's transformative impact across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-[#1c212f] p-6 h-48 flex flex-col justify-between items-center text-center rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className="bg-opacity-20 p-4 rounded-full"
                style={{
                  backgroundColor: feature.icon.props.className.includes('text-')
                    ? feature.icon.props.className.replace('text-', 'bg-').replace('400', '400/20')
                    : '',
                }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-100 mt-3">{feature.title}</h3>
              <p className="text-sm text-blue-200 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}