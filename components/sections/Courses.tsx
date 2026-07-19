"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CheckCircle, ArrowDown } from "lucide-react";

const APPLY_MESSAGE =
  "Hi, I want to apply for the 3-Month Advanced Tattooing Program at Kaal Chakkra Tattoo Academy. Please share the admission details.";
const COUNSELLING_MESSAGE =
  "Hi, I'd like to book a free counselling session for the courses at Kaal Chakkra Tattoo Academy.";

const whoIsThisFor = [
  "Complete Beginners",
  "Aspiring Tattoo Artists",
  "Fine Arts Students",
  "Designers & Creative Professionals",
  "Tattoo Artists Looking to Upgrade Their Skills",
];

const courseStructure = [
  {
    month: "Month 1",
    title: "Art & Design Foundation",
    description:
      "Master sketching, anatomy, composition, lighting, realism, and creative design principles.",
  },
  {
    month: "Month 2",
    title: "Tattoo Techniques",
    description:
      "Learn machine handling, linework, shading, color packing, digital tattoo designing, and artificial skin practice.",
  },
  {
    month: "Month 3",
    title: "Studio Experience & Portfolio Development",
    description:
      "Gain real-world experience through live tattoo demonstrations, client consultations, aftercare education, portfolio building, and career guidance.",
  },
];

const whatYouLearn = [
  "Sketching & Design",
  "Digital Tattoo Designing",
  "Machine Handling",
  "Needle & Ink Knowledge",
  "Linework & Shading",
  "Realism Techniques",
  "Artificial Skin Practice",
  "Client Consultation",
  "Hygiene & Safety Standards",
  "Portfolio Building",
  "Branding & Career Guidance",
];

const outcomes = [
  "Create custom tattoo designs",
  "Execute clean linework and smooth shading",
  "Build a pro-quality portfolio",
  "Handle client consultations confidently",
  "Follow industry-standard hygiene practices",
  "Start your career as a pro tattoo artist",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function Courses() {
  return (
    <section
      id="pro-program"
      className="scroll-mt-36 bg-background border-b border-border"
    >
      {/* Program header */}
      <div className="pt-16 md:pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Program 01 · 3 Months · Beginner to Pro
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Advanced Tattooing Program
            </h2>
            <p className="text-foreground/70 leading-relaxed text-lg mb-4">
              More than a tattoo course — a complete artist development program
              designed to take you from artistic fundamentals to pro tattoo
              execution.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Our training combines strong artistic foundations with real
              studio experience, helping you build the confidence, technical
              skills, and mindset required to grow as a tattoo artist and as a
              creative professional who understands design, discipline, and
              client experience.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Who is this for */}
      <div className="pb-14">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            className="text-center text-foreground/50 text-sm uppercase tracking-[0.2em] mb-6"
          >
            Perfect For
          </motion.p>
          <div className="flex flex-wrap justify-center gap-3">
            {whoIsThisFor.map((audience, index) => (
              <motion.span
                key={audience}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 px-4 py-2.5 border border-border bg-foreground/5 text-foreground/80 text-sm font-medium"
              >
                <CheckCircle size={15} className="text-foreground/50" />
                {audience}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Course structure */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.h3
            {...fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10"
          >
            Your 3-Month Journey
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courseStructure.map((phase, index) => (
              <motion.div
                key={phase.month}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="border border-border p-8 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
              >
                <p className="text-5xl font-extrabold text-foreground/15 mb-4">
                  0{index + 1}
                </p>
                <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-2">
                  {phase.month}
                </p>
                <h4 className="text-xl font-bold text-foreground mb-4">
                  {phase.title}
                </h4>
                <p className="text-foreground/60 leading-relaxed">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* What you'll learn + outcomes */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              What You&apos;ll Learn
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {whatYouLearn.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border text-foreground/75 bg-foreground/5 text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              After This Course, You&apos;ll Be Able To
            </h3>
            <ul className="space-y-3">
              {outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-foreground/60 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground/70">{outcome}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* CTA + cross-link to masterclass */}
      <div className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            {...fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              variant="primary"
              size="lg"
              whatsapp
              customMessage={APPLY_MESSAGE}
            >
              Apply for the 3-Month Program
            </Button>
            <Button
              variant="outline"
              size="lg"
              whatsapp
              customMessage={COUNSELLING_MESSAGE}
            >
              Book a Free Counselling Session
            </Button>
          </motion.div>

          <motion.a
            {...fadeUp}
            href="#realism-masterclass"
            className="group flex items-center justify-between gap-4 border border-border bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 p-6"
          >
            <div>
              <p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-1">
                Already tattooing?
              </p>
              <p className="text-foreground font-bold">
                Skip the fundamentals — explore the 45-Day Advanced Realism
                Masterclass
              </p>
            </div>
            <ArrowDown
              size={20}
              className="text-foreground/50 flex-shrink-0 transform group-hover:translate-y-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
