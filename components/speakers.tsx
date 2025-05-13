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
      name: "Sri D Sridhar Babu",
      role: "Minister for Industries & Commerce, Legislative Affairs",
      company: "GoT (Government of Telangana)",
      image: "/speakers/Sridhar_Babu.jpg",
      linkedIn: "https://www.linkedin.com/in/sridharbabududdilla/",
      featured: true,
    },
    {
      name: "Dr. JA Chowdary",
      role: "Founder & Chairman",
      company: "International Startup Foundation",
      image: "/speakers/JA_chowdary.jpg",
      linkedIn:
        "https://www.linkedin.com/in/jachowdary/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      featured: true,
    },
    {
      name: "Joy Tan",
      role: "Advisor",
      company: "Green Evolution Technologies Inc & Qurator.com",
      image: "/speakers/Joy_Tan.jpg",
      linkedIn: "https://www.linkedin.com/in/joytandallas/",
      featured: true,
    },
    {
      name: "Sri Atluri",
      role: "Chief Information & Quality Officer | Board Member | Advisory | Strategic Visionary | Empowering Top Talent | Promoting Excellence & Driving Growth | QEF",
      company: " President, ISF, USA",
      image: "/speakers/sri_atluri.jpg",
      linkedIn: "https://www.linkedin.com/in/sriatluri9/",
      featured: true,
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
      linkedIn: "https://www.linkedin.com/in/kiranmai-pendyala-94335427/?originalSubdomain=in",
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
      name: "Prakash Bodla",
      role: "Founder CEO",
      company: "aAROHAN Consulting",
      image: "/speakers/prakash_bodla.jpg",
      linkedIn: "https://www.linkedin.com/in/bodla/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Raviprasad Pisupati",
      role: "Founder & Managing Partner",
      company: "Tempus Law Associates",
      image: "/speakers/raviprasad_pisupati.png",
      linkedIn: "https://tempuslaw.co.in/ravi-profile/",
      featured: false,
    },
    {
      name: "Sridevi Koneru",
      role: "VP Customer Success for Industries and Revenue Cloud",
      company: "Salesforce",
      image: "/speakers/sridevi_koneru.jpg",
      linkedIn: "https://www.linkedin.com/in/sridevikoneru/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Srihari Bhat",
      role: "Founder Director",
      company: "PACE Wisdom Solutions",
      image: "/speakers/srihari_bhat.jpg",
      linkedIn: "https://www.linkedin.com/in/fayarjomandi/",
      featured: false,
    },
    {
      name: "Krishna Kumar",
      role: "Technologist, Innovator, Investor",
      company: "",
      image: "/speakers/krishna.png",
      linkedIn: "https://www.linkedin.com/in/kkrishkumar/",
      featured: false,
    },
    {
      name: "Satish Madhira",
      role: "General Partner & Founder CEO",
      company: "Shift Left Ventures, Zemoso Labs",
      image: "/speakers/satish.jpg",
      linkedIn: "https://www.linkedin.com/in/satishmadhira/",
      featured: false,
    },
    {
      name: "Dr. Sanjay Ramchander",
      role: "Dean",
      company: "McCoy College of Business at Texas State University",
      image: "/speakers/Dr_SanjayRamchander.jpg",
      linkedIn: "https://www.linkedin.com/in/sanjay-ramchander-66435a2/",
      featured: false,
    },
    {
      name: "Teresa Quinn",
      role: "Director",
      company: "Center for Innovation & Entrepreneurship, Texas State University",
      image: "/speakers/TeresaQuinn.jpg",
      linkedIn: "https://www.linkedin.com/in/teresa-quinn/",
      featured: false,
    },
    {
      name: "Dr. Kancherla Ravindranath",
      role: "Founder",
      company: "Global Hospitals Group",
      image: "/speakers/Dr_Kancherla.jpg",
      linkedIn: "https://www.linkedin.com/in/ravindranath-kancherla-8bb79b25/",
      featured: false,
    },
    {
      name: "Angelos Angelou",
      role: "CEO, Chief Strategist",
      company: "AngelouEconomics",
      image: "/speakers/AngelosAngelou.jpg",
      linkedIn: "https://www.linkedin.com/in/angelosangelou/",
      featured: false,
    },
    {
      name: "Ravi Mantha",
      role: "Co-Founder & Director",
      company: "Bollant Industries",
      image: "/speakers/RaviMantha.jpg",
      linkedIn: "https://www.linkedin.com/in/ravimantha/?originalSubdomain=in",
      featured: false,
    },
    {
      name: "Prasad Gundumogula",
      role: "Chairman, CEO, and Founder",
      company: "Mondee Holdings Inc.",
      image: "/speakers/PrasadGundumogula.jpg",
      linkedIn: "https://www.linkedin.com/in/prasadgundumogula/",
      featured: false,
    },
    {
      name: "Jay Talluri",
      role: "Founder Chairman",
      company: "Hallmark Group",
      image: "/speakers/Jayasekhar_Talluri.jpg",
      linkedIn: "https://www.linkedin.com/in/jay-talluri-4109b81/",
      featured: false,
    },
    {
      name: "Panneerselvam (PS) Madanagopal",
      role: "CEO",
      company: "Meity Startup Hub - Govt of India",
      image: "/speakers/Panneerselvam.jpg",
      linkedIn: "https://www.linkedin.com/in/panneerselvam79/?originalSubdomain=in",
      featured: false,
    },
  {
    "name": "Dr. Krishnaiah Kurapati",
    "role": "CEO",
    "company": "Basavatarakam Indo-American Cancer Hospital & Research Institute",
    "image": "/speakers/krishnaiah_kurapati.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Ram Pratti",
    "role": "Founder CEO",
    "company": "AI Driven Quant Fund",
    "image": "/speakers/ram_pratti.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Somesh Chablani",
    "role": "Global Head of Go-to-Market & Business Development",
    "company": "FIS Global",
    "image": "/speakers/somesh_chablani.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Ranjeet Tayi",
    "role": "Director User Experience",
    "company": "Informatica",
    "image": "/speakers/ranjeet_tayi.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Sathya Krishnamurthy",
    "role": "Chief Product Officer",
    "company": "Milestone Inc",
    "image": "/speakers/sathya_krishnamurthy.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Sanjeev Deshpande",
    "role": "Former EVP & Head of APAC",
    "company": "NTT Data Business Solutions",
    "image": "/speakers/sanjeev_deshpande.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Daniel Sloan",
    "role": "Founder",
    "company": "RealSplit & Future Tech",
    "image": "/speakers/daniel_sloan.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Suseela Santhosh",
    "role": "Director",
    "company": "Vishwa Vidyapeeth Group of Schools",
    "image": "/speakers/suseela_santhosh.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Mic Mann",
    "role": "CEO, UBU / Co-CEO",
    "company": "SingularityU South Africa / Mann Made",
    "image": "/speakers/mic_mann.png",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Kiran Chandra",
    "role": "Chief Technologist & Centre Head",
    "company": "Viswam.AI",
    "image": "/speakers/kiran_chandra.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Dr. Raghava Yerram",
    "role": "Chief Data Officer & Head of Data Consulting (UK)",
    "company": "Rplus Consulting",
    "image": "/speakers/raghava_yerram.jpg",
    "linkedIn": "",
    "featured": false
  },
  {
    "name": "Vijay Madduri",
    "role": "Chairman and Co-Founder",
    "company": "Impact Hub Hyderabad",
    "image": "/speakers/vijay_madduri.jpg",
    "linkedIn": "",
    "featured": false
  }
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
              className={`flex flex-col p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl backdrop-blur-lg transition-all duration-200 h-full hover:-translate-y-2 shadow-lg hover:shadow-blue-500/10 border border-white/10 ${
                speaker.featured
                  ? "bg-blue-950/40 shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                  : "bg-white/5"
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