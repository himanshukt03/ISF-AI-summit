"use client";
import { motion } from "framer-motion";
import { Calendar, Clock, Coffee, Award, Users, PieChart, Globe, Shield, Lightbulb, Utensils, Music } from "lucide-react";
import { useState, useEffect } from "react";

interface ScheduleEvent {
  time: string;
  title: string;
  icon: JSX.Element;
}

interface ScheduleDay {
  day: string;
  date: string;
  color: string;
  title: string;
  events: ScheduleEvent[];
}

const scheduleData: ScheduleDay[] = [
  // {
  //   day: "Day 1",
  //   date: "29th May 2025",
  //   color: "pink",
  //   title: "Junicorn Summit",
  //   events: [
  //     { 
  //       time: "08:30 - 9:30", 
  //       title: "Arrival & Registration",
  //       icon: <Users className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "09:30 - 11:00", 
  //       title: "Inaugural Session",
  //       icon: <Lightbulb className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "11:00 - 11:30", 
  //       title: "Networking Break - Coffee/Tea",
  //       icon: <Coffee className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "11:30 - 12:30", 
  //       title: "Junicorn Pitch Sessions",
  //       icon: <PieChart className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "12:30 - 13:30", 
  //       title: "Networking Break - Lunch",
  //       icon: <Utensils className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "13:30 - 14:30", 
  //       title: "Junicorn Pitch Sessions",
  //       icon: <PieChart className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "14:30 - 15:30", 
  //       title: "Junicorn Pitch Sessions",
  //       icon: <PieChart className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "15:30 - 16:30", 
  //       title: "Junicorn Pitch Sessions",
  //       icon: <PieChart className="w-5 h-5 text-pink-600" />
  //     },
  //     { 
  //       time: "16:30 - 17:15", 
  //       title: "Awards Ceremony",
  //       icon: <Award className="w-5 h-5 text-pink-600" />
  //     }
  //   ]
  // },
  {
    day: "Day 1",
    date: "30th May 2025",
    color: "blue",
    title: "Global AI Summit",
    events: [
      { 
        time: "08:30 - 9:00", 
        title: "Arrival & Registration",
        icon: <Users className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "09:00 - 10:00", 
        title: "Inaugural Session",
        icon: <Lightbulb className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "10:00 - 11:00", 
        title: "Roundtable: Next-Gen Health: AI Across the Continuum",
        icon: <Users className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "11:00 - 11:30", 
        title: "Networking Break - Coffee/Tea",
        icon: <Coffee className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "11:30 - 12:30", 
        title: "Roundtable: Capital Meets Innovation: AI Investor Connect",
        icon: <Users className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "12:00 - 13:30", 
        title: "Networking Break - Lunch",
        icon: <Utensils className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "13:30 - 14:30", 
        title: "Roundtable: AI Everywhere: Cross-Industry Impact",
        icon: <Globe className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "14:30 - 15:30", 
        title: "Roundtable: GCC Without Borders: AI, Operations & Data Privacy",
        icon: <Shield className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "15:30 - 16:30", 
        title: "Roundtable: Future Forward: AI, Work, & What Comes Next",
        icon: <Lightbulb className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "16:30 - 17:15", 
        title: "Awards Ceremony",
        icon: <Award className="w-5 h-5 text-blue-600" />
      },
      { 
        time: "17:15 - 18:00", 
        title: "Cultural Evening",
        icon: <Music className="w-5 h-5 text-blue-600" />
      }
    ]
  }
];

// Mobile Timeline Component
const MobileTimeline = ({ day }: { day: ScheduleDay }) => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <div className="relative">
      {/* Day Header */}
      <div className={`flex items-center gap-3 mb-6 ${day.color === "pink" ? "text-pink-600" : "text-blue-600"}`}>
        <Calendar className="w-6 h-6" />
        <div>
          <h3 className="text-xl font-bold">{day.title}</h3>
          <p className="text-foreground/60 text-sm">{day.date}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className={`absolute left-4 top-0 bottom-0 w-0.5 ${day.color === "pink" ? "bg-pink-200" : "bg-blue-200"}`}></div>
        
        {day.events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`relative pl-12 pb-8 ${activeEvent === index ? "opacity-100" : "opacity-60"}`}
            onClick={() => setActiveEvent(index)}
          >
            {/* Timeline dot */}
            <div 
              className={`absolute left-2 top-2 w-6 h-6 rounded-full flex items-center justify-center ${
                activeEvent === index 
                  ? (day.color === "pink" ? "bg-pink-600" : "bg-blue-600") 
                  : "bg-foreground/10"
              }`}
            >
              <div className={`w-2 h-2 rounded-full ${
                activeEvent === index 
                  ? "bg-white" 
                  : (day.color === "pink" ? "bg-pink-600" : "bg-blue-600")
              }`}></div>
            </div>
            
            {/* Time */}
            <div className="text-sm font-medium mb-1 flex items-center">
              <Clock className={`w-4 h-4 mr-1 ${day.color === "pink" ? "text-pink-600" : "text-blue-600"}`} />
              <span>{event.time}</span>
            </div>
            
            {/* Event details */}
            <div className={`p-3 rounded-lg ${
              activeEvent === index 
                ? (day.color === "pink" ? "bg-pink-50" : "bg-blue-50") 
                : "bg-foreground/5"
            }`}>
              <div className="flex items-center mb-1">
                {event.icon}
                <h4 className="ml-2 font-medium">{event.title}</h4>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// Desktop Schedule Component
const DesktopSchedule = ({ day }: { day: ScheduleDay }) => {
  return (
    <div className="glass-card p-6 rounded-xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex flex-row items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Calendar className={`w-6 h-6 ${day.color === "pink" ? "text-pink-600" : "text-blue-600"}`} />
          <div>
            <h3 className={`text-2xl font-bold ${day.color === "pink" ? "text-pink-600" : "text-blue-600"}`}>
              {day.title}
            </h3>
            <p className="text-foreground/60 text-sm">{day.date}</p>
          </div>
        </div>
        <span className={`inline-block px-4 py-1 rounded-full text-sm font-medium ${
          day.color === "pink" ? "bg-pink-100 text-pink-700" : "bg-blue-100 text-blue-700"
        }`}>
          {day.day}
        </span>
      </div>
      
      <div className="space-y-3">
        {day.events.map((event, eventIndex) => (
          <motion.div
            key={eventIndex}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
            className="flex flex-row items-center justify-between p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200"
          >
            <div className="flex items-center space-x-4">
              {event.icon}
              <span className="text-foreground/80 font-medium">{event.title}</span>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <Clock className={`w-4 h-4 ${day.color === "pink" ? "text-pink-600" : "text-blue-600"}`} />
              <span className="text-sm text-foreground/60">{event.time}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export function Schedule() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 768);
      };
      
      // Initial check
      checkMobile();
      
      // Add event listener
      window.addEventListener("resize", checkMobile);
      
      // Cleanup
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Join us for two days of innovation, networking, and insights at the Global AI Summit and Junicorn events.
          </p>
        </motion.div>

        {/* Desktop version */}
        <div className={`${isMobile ? "hidden" : "block"} max-w-5xl mx-auto`}>
          <div className="space-y-12">
            {scheduleData.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              >
                <DesktopSchedule day={day} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile version */}
        <div className={`${isMobile ? "block" : "hidden"}`}>
          <div className="space-y-16">
            {scheduleData.map((day, dayIndex) => (
              <motion.div
                key={dayIndex}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              >
                <MobileTimeline day={day} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}