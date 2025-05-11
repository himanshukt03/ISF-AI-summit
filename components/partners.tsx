"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Supporting Organisations data
const supportingOrganisations = [
  { src: "/logos/aarohan.png", alt: "Aarohan logo" },
  { src: "/logos/startup-runway.png", alt: "Startup Runway logo" },
  { src: "/logos/us-india-chamber.jpeg", alt: "US India Chamber of Commerce logo" },
  { src: "/logos/tie-austin.png", alt: "TiE Austin Fostering Entrepreneurship logo" },
];

// Junicorn Project Partners data
const partners = [
  { src: "/logos/identcity.41da4c26.svg", alt: "Identcity Consultants logo" },
  { src: "/logos/thinker.075ba72c.svg", alt: "Young Tinker Foundation logo" },
  { src: "/logos/inunity.94d3272f.svg", alt: "Inunity logo" },
  { src: "/logos/wharf-street.svg", alt: "Wharf Street Studios logo" },
  { src: "/logos/roy.f0d7d720.svg", alt: "Switch + Roy Studio logo" },
  { src: "/logos/signitives.jpg", alt: "Signitives logo" },
  { src: "/logos/vadaanya.png", alt: "Vadaanya logo" },
  { src: "/logos/task.png", alt: "TASK logo" },
];

export function PartnersShowcase() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 md:py-20 bg-background" id="partners">
      <div className="container px-4 mx-auto">
        {/* Supporting Organisations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
            <span>ISF Global Junicorn + AI Summit</span>
            <br />
            <span>Supporting Organisations</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Collaborating with innovative organizations to drive AI and technology forward.
          </p>
        </motion.div>

        <div className="supporting-grid">
          {supportingOrganisations.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="supporting-card"
            >
              <img
                src={org.src}
                alt={org.alt}
                className="supporting-logo"
                width={200}
                height={100}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>

        {/* Separator */}
        <hr className="my-12 border-t border-gray-600" />

        {/* Junicorn Project Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">Junicorn Project Partners</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            Empowering young entrepreneurs to innovate and lead the future of AI and technology
          </p>
        </motion.div>

        <div className="partners-grid">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="partner-card"
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="partner-logo"
                width={200}
                height={100}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .bg-background {
          background-color: #020817; /* Correct dark background */
        }

        /* Supporting Organisations Grid */
        .supporting-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .supporting-card {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 250px;
          height: 150px;
        }

        .supporting-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 0.5rem; /* Rounded edges for images */
          border: 1px solid white; /* White outline for visibility */
        }

        /* Junicorn Partners Grid */
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          justify-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .partner-card {
          background-color: white;
          border-radius: 1rem;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          max-width: 250px;
          height: 150px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        .partner-logo {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          border-radius: 0.5rem;
        }

        /* Responsive Breakpoints for Supporting Organisations */
        @media (max-width: 1024px) {
          .supporting-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .supporting-card {
            max-width: 200px;
            height: 130px;
          }
        }

        @media (max-width: 768px) {
          .supporting-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .supporting-card {
            max-width: 160px;
            height: 100px;
          }
        }

        @media (max-width: 480px) {
          .supporting-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .supporting-card {
            max-width: 140px;
            height: 90px;
          }
        }

        /* Responsive Breakpoints for Junicorn Partners */
        @media (max-width: 1024px) {
          .partners-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 1.5rem;
          }

          .partner-card {
            max-width: 200px;
            height: 130px;
            padding: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .partner-card {
            max-width: 160px;
            height: 100px;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .partners-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.75rem;
          }

          .partner-card {
            max-width: 140px;
            height: 90px;
            padding: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}