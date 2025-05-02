"use client";
import { motion } from "framer-motion";
import { LinkedinIcon, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedIn?: string;
  featured?: boolean;
}

export function SpeakersSection({ id }: { id?: string }) {
  const [visibleSpeakers, setVisibleSpeakers] = useState(8);

  const speakers: Speaker[] = [
    {
      name: "Dr. JA Chowdary",
      role: "Founder & Chairman",
      company: "International Startup Foundation",
      image: "/speakers/JA_chowdary.jpg",
      linkedIn:
        "https://www.linkedin.com/in/jachowdary/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      featured: false,
    },
    {
      name: "Joginder Tanikella",
      role: "CEO",
      company: "T-Works",
      image: "/speakers/joginder_tanikela.jpg",
      linkedIn:
        "https://www.linkedin.com/in/jogindertanikella/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Dr Kiranmai Dutt Pendyala",
      role: "Former CVP HR",
      company: "UPS & AMD",
      image: "/speakers/kiranmai_pendyala.png",
      linkedIn:
        "https://www.linkedin.com/in/kiranmai-pendyala-94335427/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Vikrant Varshney",
      role: "Managing Partner, Chairperson",
      company: "SucSEED Indovation GROWTH Fund",
      image: "/speakers/vikrant_varshney.jpeg",
      linkedIn:
        "https://www.linkedin.com/in/vikrantvarshney-indovation/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Sreekanth K Arimanithaya",
      role: "Entrepreneur In Residence and CHRO",
      company: "Machani Group",
      image: "/speakers/Sreekanth_k.jpg",
      linkedIn:
        "https://www.linkedin.com/in/sreekanth-k-arimanithaya-80aa9b3/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Nagesh Pabbisetty",
      role: "Founder CEO",
      company: "BusinessFirst & RealtySlices",
      image: "/speakers/nagesh_pabbisetty.jpg",
      linkedIn: "https://www.linkedin.com/in/nageshp/",
      featured: false,
    },
    {
      name: "Dayakar Puskoor",
      role: "Founder and Managing Director",
      company: "Dallas Venture Capital",
      image: "/speakers/dayakar_puskoor.jpg",
      linkedIn: "https://www.linkedin.com/in/dayakarp/",
      featured: false,
    },
    {
      name: "Joy Tan",
      role: "Advisor",
      company:
        "Green Evolution Technologies Inc & Qurator.com",
      image: "/speakers/Joy_Tan.jpg",
      linkedIn: "https://www.linkedin.com/in/joytandallas/",
      featured: false,
    },
  ];

  const handleViewMore = () => {
    setVisibleSpeakers((prev) => Math.min(prev + 8, speakers.length));
  };

  return (
    <section id={id || "speakers"} className="relative py-20 bg-[#020817] overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] bg-[length:60px_60px]" />
      </div>
      
      {/* Single glow effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-900/30 blur-[100px]"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-3 py-1 text-xs font-medium tracking-wider uppercase bg-white/5 rounded-full mb-4 inline-block text-blue-300">
            Featured Speakers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industry Leaders & <span className="text-blue-400">Innovators</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Learn from the brightest minds in AI and technology
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {speakers.slice(0, visibleSpeakers).map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`flex flex-col p-3 sm:p-4 md:p-6 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-lg transition-all duration-200 h-full hover:-translate-y-2 shadow-lg hover:shadow-blue-500/10 ${
                speaker.featured ? "ring-1 ring-blue-400/30" : ""
              }`}
            >
              <div className="relative w-full aspect-square rounded-lg md:rounded-xl overflow-hidden mb-3 md:mb-4 border border-white/10">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                {speaker.featured && (
                  <div className="absolute top-2 left-2 md:top-3 md:left-3 bg-blue-500/90 text-white text-[10px] md:text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex-grow space-y-2 md:space-y-3">
                <h3 className="text-sm md:text-base lg:text-lg font-bold text-white break-words line-clamp-2">
                  {speaker.name}
                </h3>
                <div className="space-y-1">
                  <p className="text-blue-200/90 text-xs md:text-sm font-medium break-words line-clamp-2">
                    {speaker.role}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm font-light break-words line-clamp-2">
                    {speaker.company}
                  </p>
                </div>
              </div>

              {speaker.linkedIn && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 md:mt-4 w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg font-medium transition-colors text-xs md:text-sm"
                  onClick={() => window.open(speaker.linkedIn, "_blank")}
                >
                  <LinkedinIcon className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                  LinkedIn
                  <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4 opacity-70" />
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        {speakers.length > visibleSpeakers && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              onClick={handleViewMore}
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
            >
              View More Speakers
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
