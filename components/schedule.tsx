"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Star } from "lucide-react"; // Import icons

const scheduleData = [
  {
    day: "Day 1",
    date: "29th May 2025",
    events: [
      { title: "Junicorn", time: "09:00", icon: <Star className="w-5 h-5" /> },
      { title: "Exclusive Dinner", time: "20:00", icon: <Star className="w-5 h-5" /> },
    ],
  },
  {
    day: "Day 2",
    date: "30th May 2025",
    events: [
      { title: "Main Summit and ISF Innovation Awards", time: "09:00", icon: <Star className="w-5 h-5" /> },
      { title: "Grand Gala Dinner", time: "19:00", icon: <Star className="w-5 h-5" /> },
    ],
  },
];

export function Schedule() {
  return (
    <section className="py-16 bg-background" id="schedule">
      <div className="container px-4 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-8">
          {scheduleData.map((day, dayIndex) => (
            <motion.div
              key={dayIndex}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: dayIndex * 0.1 }}
              className="glass-card p-6 rounded-xl border border-border/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold text-primary">{day.day}</h3>
              </div>
              <p className="text-foreground/60 mb-6 ml-9">{day.date}</p>
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => (
                  <div 
                    key={eventIndex} 
                    className="flex items-center justify-between p-4 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      {event.icon}
                      <span className="text-foreground/80 font-medium">{event.title}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm text-foreground/60">{event.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
