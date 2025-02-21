"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { MonitorSmartphone, Users, BriefcaseBusiness, Zap } from "lucide-react";

const metaverseHighlights = [
    {
        icon: <MonitorSmartphone className="w-6 h-6" />,
        title: "Virtual Summit Hall",
        description: "Step into an immersive digital venue for keynotes and discussions.",
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Networking Lounges",
        description: "Connect with global professionals in interactive virtual spaces.",
    },
    {
        icon: <BriefcaseBusiness className="w-6 h-6" />,
        title: "Virtual AI Job Mela",
        description: "Explore AI-driven job opportunities and speed interviews online.",
    },
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Cutting-Edge Technology",
        description: "Experience innovations that shape the future of AI & tech.",
    },
];

export function MetaverseSection() {
    return (
        <section className="py-20 bg-background" id="metaverse">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 leading-tight"
                >
                    Can't be in Austin? Join us in the Metaverse
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-8 flex flex-col justify-center h-full order-2 md:order-none"
                    >
                        <ul className="space-y-6">
                            {metaverseHighlights.map((highlight, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded-xl text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                        {highlight.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold mb-1">{highlight.title}</h3>
                                        <p className="text-foreground/70 text-sm leading-relaxed">{highlight.description}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-lg font-medium text-primary"
                        >
                            Don't just attend—immerse yourself in the future!
                        </motion.p>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video flex justify-center items-center h-full order-1 md:order-none"
                    >
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="relative h-full w-full rounded-xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="/metaverse.webp"
                                alt="Metaverse Experience"
                                width={600}
                                height={400}
                                className="object-cover w-full h-full"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default MetaverseSection;
