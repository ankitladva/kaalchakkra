"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-12 md:py-16 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              About The Studio
            </p>
            <div className="relative w-24 h-24 mb-6">
              <Image
                src="/logo.png"
                alt="Kaal Chakkra Logo"
                fill
                className="object-contain logo-theme"
              />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground">
              KAAL
              <br />
              <span className="text-foreground/70">CHAKKRA</span>
            </h2>
            <div className="w-20 h-1 bg-foreground mt-8" />
          </motion.div>

          {/* Right: Story */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-foreground/70 text-lg leading-relaxed">
              <span className="text-foreground font-semibold">Kaal Chakkra</span> —
              meaning &ldquo;The Wheel of Time&rdquo; — represents the eternal
              cycle of creation, preservation, and transformation. Every tattoo
              we create is a mark in time, a permanent expression of your
              journey.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Founded with a deep reverence for both traditional artistry and
              modern precision, Kaal Chakkra Tattoo Studio is where spirituality
              meets craftsmanship. We believe that every tattoo tells a story,
              carries meaning, and becomes a part of your identity.
            </p>
            <p className="text-foreground/60 leading-relaxed">
              Our philosophy is rooted in understanding — we take time to listen
              to your vision, explore the symbolism that resonates with you, and
              craft designs that are not just beautiful, but deeply personal.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">8+</p>
                <p className="text-foreground/50 text-sm mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">1000+</p>
                <p className="text-foreground/50 text-sm mt-1">Tattoos Created</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-extrabold text-foreground">100%</p>
                <p className="text-foreground/50 text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

