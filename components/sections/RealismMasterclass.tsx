"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { CheckCircle, ArrowUp } from "lucide-react";

const APPLY_MESSAGE =
  "Hi, I want to apply for the 45-Day Advanced Realism Masterclass at Kaal Chakkra Tattoo Academy. Please share the admission details.";
const COUNSELLING_MESSAGE =
  "Hi, I'd like to book a free counselling session for the 45-Day Advanced Realism Masterclass at Kaal Chakkra Tattoo Academy.";

const whoIsThisFor = [
  "Tattoo artists with basic machine knowledge",
  "Artists looking to master Black & Grey Realism",
  "Professionals wanting to improve composition and shading",
  "Artists preparing to build a premium realism portfolio",
  "Tattooists ready to take their work to the next level",
];

const whatYouMaster = [
  "Fine Art Realism",
  "Portrait Construction",
  "Light & Shadow",
  "Texture Creation",
  "Contrast & Depth",
  "Black & Grey Realism",
  "Needle Selection",
  "Layering Techniques",
  "Composition & Body Flow",
  "Premium Tattoo Finishing",
  "Live Tattoo Demonstrations",
  "Portfolio Development",
];

const courseBreakdown = [
  {
    week: "Week 1",
    title: "Fine Art Realism Foundation",
    intro: "Build the artistic fundamentals behind every great realism tattoo.",
    topics: [
      "Academic Drawing Techniques",
      "Light & Shadow Theory",
      "Value Scale",
      "Form & Depth",
      "Texture Studies",
      "Observation Skills",
    ],
  },
  {
    week: "Week 2",
    title: "Advanced Realism Sketching",
    intro: "Transform references into realistic artwork.",
    topics: [
      "Portrait Construction",
      "Facial Anatomy",
      "Eyes, Lips, Nose & Hair",
      "Fur, Metal, Fabric & Glass Textures",
      "Reference Analysis",
      "Fine Art Rendering",
    ],
  },
  {
    week: "Week 3",
    title: "Realism Tattoo Techniques",
    intro: "Convert your artwork into clean, premium tattoos.",
    topics: [
      "Needle Configurations",
      "Smooth Black & Grey Gradients",
      "Contrast Management",
      "Texture Creation",
      "Layering Techniques",
      "Skin Tone Adaptation",
      "Realistic Finishing",
    ],
  },
  {
    week: "Week 4",
    title: "Advanced Composition",
    intro: "Learn how to design tattoos that flow naturally with the body.",
    topics: [
      "Placement & Body Flow",
      "Negative Space",
      "Background Design",
      "Atmospheric Perspective",
      "Sleeve Planning",
      "Storytelling Through Composition",
    ],
  },
  {
    week: "Week 5 & 6",
    title: "Live Tattoo Execution & Portfolio Building",
    intro:
      "Apply everything you've learned in a professional studio environment.",
    topics: [
      "Live Tattoo Demonstrations",
      "Real Client Workflow",
      "Tattoo Planning",
      "Design Placement",
      "Session Management",
      "Professional Finishing",
      "Portfolio Development",
      "Mentor Feedback",
    ],
  },
];

const achievements = [
  "Create premium Black & Grey realism tattoos",
  "Build stronger compositions",
  "Master realistic shading and texture",
  "Design tattoos with better body flow",
  "Create a high-end portfolio",
  "Deliver more confident and consistent tattoo work",
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function RealismMasterclass() {
  return (
    <section
      id="realism-masterclass"
      className="scroll-mt-36 bg-foreground/[0.03] border-b border-border"
    >
      {/* Program header */}
      <div className="pt-16 md:pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Program 02 · 45 Days · For Practicing Artists
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              Advanced Realism Masterclass
            </h2>
            <p className="text-xl md:text-2xl font-bold text-foreground/80 mb-6">
              Master Black & Grey Realism Like a Pro.
            </p>
            <p className="text-foreground/60 leading-relaxed text-lg mb-3">
              Take your tattoo skills to the next level with an intensive
              45-day program focused on Fine Art Realism, Black & Grey
              Tattooing, Composition, and Live Tattoo Execution.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Designed and mentored by{" "}
              <span className="text-foreground font-semibold">
                Sumit M. Tank
              </span>
              , this masterclass is built for artists who want to create
              premium realism tattoos with confidence and precision — based on
              real studio experience, giving you practical knowledge that can
              immediately improve your work.
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
            This Program Is Perfect For
          </motion.p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto">
            {whoIsThisFor.map((audience, index) => (
              <motion.li
                key={audience}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="flex items-start gap-3 border border-border p-4 bg-foreground/5"
              >
                <CheckCircle
                  size={18}
                  className="text-foreground/60 mt-0.5 flex-shrink-0"
                />
                <span className="text-foreground/80 text-sm font-medium">
                  {audience}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      {/* What you'll master */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h3
            {...fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10"
          >
            What You&apos;ll Master
          </motion.h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {whatYouMaster.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 border border-border text-foreground/75 bg-foreground/5 text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>
      </div>

      {/* Week-by-week breakdown */}
      <div className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.h3
            {...fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-foreground text-center mb-10"
          >
            Week-by-Week Breakdown
          </motion.h3>
          <div className="space-y-5">
            {courseBreakdown.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="border border-border p-7 bg-foreground/5 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 mb-2">
                  <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] whitespace-nowrap">
                    {phase.week}
                  </p>
                  <h4 className="text-lg font-bold text-foreground">
                    {phase.title}
                  </h4>
                </div>
                <p className="text-foreground/60 mb-4 text-sm">{phase.intro}</p>
                <div className="flex flex-wrap gap-2">
                  {phase.topics.map((topic) => (
                    <span
                      key={topic}
                      className="px-3 py-1.5 border border-border text-foreground/70 text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements + student experience */}
      <div className="pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-8">
              What You&apos;ll Achieve
            </h3>
            <ul className="space-y-3">
              {achievements.map((achievement) => (
                <li key={achievement} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-foreground/60 mt-0.5 flex-shrink-0"
                  />
                  <span className="text-foreground/70">{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-border p-8 bg-foreground/5"
          >
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Student Experience
            </p>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              This isn&apos;t a classroom course — it&apos;s a studio
              experience.
            </h3>
            <div className="space-y-3 text-foreground/60 leading-relaxed">
              <p>
                You&apos;ll spend your time learning, practicing, receiving
                one-on-one feedback, observing live tattoo sessions, and
                refining your skills under expert mentorship.
              </p>
              <p>
                Every lesson is designed to help you grow as an artist, not
                just complete a course.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA + cross-link back to program 01 */}
      <div className="pb-16 md:pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.p
            {...fadeUp}
            className="text-center text-foreground/80 font-semibold tracking-wide mb-6"
          >
            Limited Seats • Small Batches • Personalized Mentorship
          </motion.p>
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
              Apply for the Masterclass
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
            href="#pro-program"
            className="group flex items-center justify-between gap-4 border border-border bg-foreground/5 hover:bg-foreground/10 transition-all duration-300 p-6"
          >
            <div>
              <p className="text-foreground/50 text-xs uppercase tracking-[0.2em] mb-1">
                New to tattooing?
              </p>
              <p className="text-foreground font-bold">
                Start with the 3-Month Advanced Tattooing Program — no
                experience needed
              </p>
            </div>
            <ArrowUp
              size={20}
              className="text-foreground/50 flex-shrink-0 transform group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
