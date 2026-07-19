"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CheckCircle, ChevronDown, Clock, Sparkles } from "lucide-react";

const programs = [
  {
    id: "pro-program",
    badge: "Program 01",
    duration: "3 Months",
    level: "Start here if you're new",
    title: "Advanced Tattooing Program",
    description:
      "A complete artist development program that takes you from artistic fundamentals to pro tattoo execution.",
    highlights: [
      "Art & Design Foundation",
      "Machine Handling & Tattoo Techniques",
      "Real Studio Experience",
      "Portfolio & Career Guidance",
    ],
    note: "No experience needed",
    applyMessage:
      "Hi, I want to apply for the 3-Month Advanced Tattooing Program at Kaal Chakkra Tattoo Academy. Please share the admission details.",
  },
  {
    id: "realism-masterclass",
    badge: "Program 02",
    duration: "45 Days",
    level: "For practicing artists",
    title: "Advanced Realism Masterclass",
    description:
      "An intensive masterclass in Fine Art Realism, Black & Grey tattooing, composition, and live tattoo execution.",
    highlights: [
      "Fine Art Realism Foundation",
      "Black & Grey Techniques",
      "Advanced Composition & Body Flow",
      "Live Execution & Portfolio",
    ],
    note: "Basic machine knowledge required",
    applyMessage:
      "Hi, I want to apply for the 45-Day Advanced Realism Masterclass at Kaal Chakkra Tattoo Academy. Please share the admission details.",
  },
];

const trustPoints = [
  "Mentored by Sumit M. Tank",
  "8+ Years Experience",
  "Small Batch Learning",
  "Certificate of Completion",
];

export default function AcademyHero() {
  return (
    <div className="pt-32 pb-16 md:pt-40 md:pb-20 border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
            Kaal Chakkra Tattoo Academy
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-foreground mb-6">
            Become a Pro Tattoo Artist
          </h1>
          <p className="text-foreground/70 max-w-3xl mx-auto leading-relaxed text-lg mb-3">
            We believe tattooing is permanent art that deserves creativity,
            precision, and responsibility.
          </p>
          <p className="text-foreground/60 max-w-3xl mx-auto leading-relaxed">
            From artistic fundamentals to premium Black & Grey realism — learn
            inside a working tattoo studio through hands-on training, live
            demonstrations, and personalized mentorship. Two programs, one goal:
            making you a confident, skilled, pro tattoo artist.
          </p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-14"
        >
          {trustPoints.map((point) => (
            <span
              key={point}
              className="flex items-center gap-2 text-foreground/60 text-sm"
            >
              <Sparkles size={14} className="text-foreground/40" />
              {point}
            </span>
          ))}
        </motion.div>

        {/* Program cards — both visible up front */}
        <div
          id="programs"
          className="scroll-mt-36 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {programs.map((program, index) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 + index * 0.15 }}
              className="border border-border bg-foreground/5 hover:bg-foreground/[0.08] transition-all duration-300 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-foreground/50 text-xs uppercase tracking-[0.2em]">
                  {program.badge}
                </span>
                <span className="flex items-center gap-2 px-3 py-1.5 border border-border text-foreground text-sm font-semibold">
                  <Clock size={14} className="text-foreground/60" />
                  {program.duration}
                </span>
              </div>

              <p className="text-foreground/50 text-sm mb-2">{program.level}</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                {program.title}
              </h2>
              <p className="text-foreground/60 leading-relaxed mb-6">
                {program.description}
              </p>

              <ul className="space-y-2.5 mb-6">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <CheckCircle
                      size={17}
                      className="text-foreground/50 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-foreground/75 text-sm font-medium">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-foreground/40 text-xs uppercase tracking-wider mb-6">
                {program.note}
              </p>

              <div className="mt-auto flex flex-col sm:flex-row gap-3">
                <Button
                  variant="primary"
                  size="md"
                  whatsapp
                  customMessage={program.applyMessage}
                  className="flex-1"
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  href={`#${program.id}`}
                  className="flex-1"
                >
                  View Curriculum
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#mentor"
            className="flex flex-col items-center gap-1 text-foreground/40 hover:text-foreground/70 transition-colors text-xs uppercase tracking-[0.2em]"
          >
            Meet your mentor
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
