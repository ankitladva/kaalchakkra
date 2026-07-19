"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AcademyMentor() {
  return (
    <div id="mentor" className="scroll-mt-36 py-16 md:py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 w-full bg-foreground/5 border border-border overflow-hidden"
          >
            <Image
              src="/images/sumit.png"
              alt="Sumit M. Tank - Founder & Mentor, Kaal Chakkra Tattoo Academy"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Meet Your Mentor
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-2">
              Learn from Sumit M. Tank
            </h2>
            <p className="text-foreground/50 mb-6">
              Founder & Mentor, Kaal Chakkra Tattoo Academy
            </p>
            <div className="space-y-4 text-foreground/60 leading-relaxed">
              <p>
                With{" "}
                <span className="text-foreground font-semibold">
                  8+ years of professional experience
                </span>{" "}
                and a{" "}
                <span className="text-foreground font-semibold">
                  Fine Arts background
                </span>
                , Sumit M. Tank has dedicated his career to mastering tattoo
                artistry — specializing in Black & Grey Realism, custom tattoo
                composition, and advanced techniques — and to mentoring the
                next generation of artists.
              </p>
              <p>
                His teaching focuses on building strong artistic foundations,
                mastering technical skills, understanding real studio
                workflows, and developing the confidence needed to succeed in
                the tattoo industry.
              </p>
              <p>
                Every student receives personal guidance, honest feedback, and
                practical training throughout the course.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
