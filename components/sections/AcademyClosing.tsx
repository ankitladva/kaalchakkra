"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/ui/FaqAccordion";
import {
  Palette,
  Building2,
  Zap,
  MonitorSmartphone,
  ShieldCheck,
  FolderOpen,
  Compass,
  Users,
  Sparkles,
} from "lucide-react";

const APPLY_MESSAGE =
  "Hi, I want to apply for a course at Kaal Chakkra Tattoo Academy. Please share the admission details.";
const COUNSELLING_MESSAGE =
  "Hi, I'd like to book a free counselling session for the courses at Kaal Chakkra Tattoo Academy.";

const whyChoose = [
  { icon: Palette, title: "Strong Art & Design Foundation" },
  { icon: Building2, title: "Studio-Based Practical Learning" },
  { icon: Zap, title: "Live Tattoo Demonstrations" },
  { icon: MonitorSmartphone, title: "Digital Tattoo Designing" },
  { icon: ShieldCheck, title: "Industry Standard Hygiene Training" },
  { icon: FolderOpen, title: "Portfolio Development" },
  { icon: Compass, title: "Career Guidance" },
  { icon: Users, title: "Small Batches with Personal Mentorship" },
];

const admissionSteps = [
  "Submit Your Enquiry",
  "Book a Counselling Session",
  "Complete Registration",
  "Confirm Your Seat",
  "Start Your Tattoo Journey",
];

const programFaqs = [
  {
    question: "Is the 3-Month Program suitable for beginners?",
    answer:
      "Yes. The program starts with art and design fundamentals in Month 1, so complete beginners can build a strong foundation before moving to tattoo techniques. No previous experience is required.",
  },
  {
    question: "Will I receive practical training?",
    answer:
      "Absolutely. Both programs are built around hands-on learning: daily practice, artificial skin work, live demonstrations, and real studio exposure with continuous mentor feedback.",
  },
  {
    question: "Will I tattoo on real skin?",
    answer:
      "You begin with artificial skin practice, then progress to real studio experience with live tattoo demonstrations and client workflows under Sumit's supervision.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. A Certificate of Completion from Kaal Chakkra Tattoo Academy is awarded after successfully finishing either program.",
  },
  {
    question: "What is the batch size?",
    answer:
      "We deliberately keep batches small so every student receives personal mentorship, honest feedback, and one-on-one guidance throughout the course.",
  },
  {
    question: "Do I need prior experience for the 45-Day Masterclass?",
    answer:
      "Yes. The masterclass is designed for artists who already have basic tattooing knowledge and want to specialize in realism. If you're starting from zero, begin with the 3-Month Program.",
  },
  {
    question: "Is the masterclass focused only on Black & Grey Realism?",
    answer:
      "Yes. The masterclass curriculum is dedicated to mastering premium Black & Grey Realism techniques — fine art foundations, realistic shading, composition, and live execution.",
  },
  {
    question: "Will I receive career guidance?",
    answer:
      "Yes. Career guidance is a core part of the training, covering portfolio building, branding, and the practical steps to grow as a professional tattoo artist.",
  },
  {
    question: "How do I apply?",
    answer:
      "Submit your enquiry on WhatsApp, book a free counselling session, complete your registration, and confirm your seat to start your tattoo journey.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

export default function AcademyClosing() {
  return (
    <section className="bg-background">
      {/* Why choose */}
      <div className="py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Why Choose Kaal Chakkra Tattoo Academy?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-foreground/5 border border-border p-6 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="w-12 h-12 border border-border flex items-center justify-center mb-4">
                  <item.icon size={22} className="text-foreground/70" />
                </div>
                <h3 className="font-bold text-foreground leading-snug">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Hands-on + Hygiene */}
      <div className="py-16 md:py-20 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-border p-8 md:p-10 bg-foreground/5"
          >
            <div className="w-12 h-12 border border-border flex items-center justify-center mb-6">
              <Sparkles size={22} className="text-foreground/70" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hands-on Learning Experience
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              Our training is built around practical learning. Students receive
              continuous mentor feedback, daily practice, live demonstrations,
              and real studio exposure to develop confidence and pro-level
              skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="border border-border p-8 md:p-10 bg-foreground/5"
          >
            <div className="w-12 h-12 border border-border flex items-center justify-center mb-6">
              <ShieldCheck size={22} className="text-foreground/70" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Hygiene & Safety
            </h3>
            <p className="text-foreground/60 leading-relaxed">
              Learn industry-standard sterilization, workstation setup, skin
              preparation, cross-contamination prevention, and aftercare
              protocols that every pro tattoo artist must follow.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Student success */}
      <div className="py-16 md:py-20 border-b border-border bg-foreground/[0.03]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Student Success
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              Real Skills. Real Growth. Real Artists.
            </h2>
            <p className="text-foreground/60 leading-relaxed text-lg">
              Explore student portfolios, testimonials, artwork progression,
              and success stories that showcase the skills and confidence
              students develop throughout the program.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Admission process */}
      <div
        id="admission"
        className="scroll-mt-36 py-16 md:py-20 border-b border-border"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Admission Process
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-border p-6 bg-foreground/5 text-center"
              >
                <p className="text-3xl font-extrabold text-foreground/20 mb-3">
                  {index + 1}
                </p>
                <p className="text-foreground/80 font-semibold leading-snug">
                  {step}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-36 py-16 md:py-20 border-b border-border">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
            <FaqAccordion items={programFaqs} />
          </motion.div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">
              Turn Your Passion Into a Career
            </h2>
            <div className="space-y-4 text-foreground/60 leading-relaxed text-lg mb-10">
              <p>Every great tattoo artist starts with the right foundation.</p>
              <p>
                Join Kaal Chakkra Tattoo Academy and learn directly from Sumit
                M. Tank in a studio environment where art, discipline, and
                practical experience come together — whether you&apos;re
                starting from scratch or ready to master premium realism.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Button
                variant="primary"
                size="lg"
                whatsapp
                customMessage={APPLY_MESSAGE}
              >
                Apply Now
              </Button>
              <Button
                variant="outline"
                size="lg"
                whatsapp
                customMessage={COUNSELLING_MESSAGE}
              >
                Book Your Free Counselling Session
              </Button>
            </div>
            <a
              href="#programs"
              className="text-foreground/50 hover:text-foreground text-sm transition-colors duration-300"
            >
              ↑ Compare both programs again
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
