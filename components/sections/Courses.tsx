"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { GraduationCap, Clock, Users, Award, CheckCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const courseFeatures = [
  {
    icon: GraduationCap,
    title: "Comprehensive Curriculum",
    description: "From basics to advanced techniques, covering all aspects of professional tattooing",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Learn at your own pace with structured modules and hands-on practice sessions",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Direct mentorship from Sumit Tank with personalized feedback and support",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive a professional certificate upon completion of the course",
  },
];

const courseModules = [
  "Introduction to Tattoo Artistry & History",
  "Equipment & Hygiene Standards",
  "Basic Linework & Shading Techniques",
  "Color Theory & Application",
  "Advanced Realism & Portraiture",
  "Client Consultation & Design Process",
  "Portfolio Development ",
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 md:py-32 bg-background border-t border-border">
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
            Professional Training
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-6">
            Complete Course in Advanced Tattoo
          </h2>
          <p className="text-foreground/60 max-w-3xl mx-auto leading-relaxed text-lg">
            Master the art of professional tattooing with our comprehensive
            advanced course. Learn from industry-leading techniques, develop
            your unique style, and build a successful career in tattoo artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Course Description */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                What You'll Learn
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-6">
                This intensive course is designed for aspiring tattoo artists
                who want to master advanced techniques and build a professional
                career. You'll learn everything from fundamental skills to
                complex artistic concepts, all while maintaining the highest
                standards of hygiene and professionalism.
              </p>
            </div>

            {/* Course Modules */}
            <div>
              <h4 className="text-xl font-bold text-foreground mb-6">
                Course Modules
              </h4>
              <ul className="space-y-3">
                {courseModules.map((module, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle
                      size={20}
                      className="text-foreground/60 mt-0.5 flex-shrink-0"
                    />
                    <span className="text-foreground/70">{module}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <a
                href={getWhatsAppLink(
                  "Hi, I'm interested in enrolling in the Complete Course in Advanced Tattoo. Can you provide more details about the course schedule, fees, and enrollment process?"
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="w-full sm:w-auto">
                  Enroll Now
                </Button>
              </a>
              <p className="text-foreground/40 text-sm mt-4">
                Limited seats available. Book your spot today!
              </p>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {courseFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-foreground/5 border border-border p-6 hover:bg-foreground/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 border border-border flex items-center justify-center flex-shrink-0">
                    <feature.icon size={24} className="text-foreground/70" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-foreground/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-extrabold text-foreground mb-2">
                3-6 Months
              </p>
              <p className="text-foreground/50 text-sm">Course Duration</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-foreground mb-2">
                100+ Hours
              </p>
              <p className="text-foreground/50 text-sm">Hands-on Practice</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-foreground mb-2">
                1-on-1
              </p>
              <p className="text-foreground/50 text-sm">Mentorship Sessions</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

