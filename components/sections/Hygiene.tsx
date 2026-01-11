"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Syringe,
  Sparkles,
  Heart,
  BadgeCheck,
  Droplets,
} from "lucide-react";

const hygienePoints = [
  {
    icon: Syringe,
    title: "Disposable Needles",
    description: "Single-use, sterile needles for every session",
  },
  {
    icon: ShieldCheck,
    title: "Sterile Equipment",
    description: "Hospital-grade sterilization protocols",
  },
  {
    icon: Sparkles,
    title: "Clean Environment",
    description: "Sanitized workspace before each session",
  },
  {
    icon: Droplets,
    title: "Premium Inks",
    description: "Vegan, certified tattoo inks only",
  },
  {
    icon: BadgeCheck,
    title: "Licensed Studio",
    description: "Partially compliant with health standards",
  },
  {
    icon: Heart,
    title: "Aftercare Support",
    description: "Complete healing guidance provided",
  },
];

export default function Hygiene() {
  return (
    <section className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
            Your Safety Matters
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Hygiene & Safety
          </h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            We maintain the highest standards of cleanliness and safety.
            Your health and comfort are our top priorities.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
          {hygienePoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 border border-foreground/20 flex items-center justify-center transition-all duration-300 group-hover:border-foreground/40 group-hover:bg-foreground/5">
                <point.icon
                  size={28}
                  className="text-foreground/60 group-hover:text-foreground transition-colors duration-300"
                />
              </div>
              <h3 className="font-bold text-lg mb-2 text-foreground">{point.title}</h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

