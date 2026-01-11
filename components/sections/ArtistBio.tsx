"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Palette, Clock, Heart } from "lucide-react";

const highlights = [
  {
    icon: Clock,
    title: "9+ Years",
    description: "Professional tattooing experience",
  },
  {
    icon: Palette,
    title: "Specialization",
    description: "Custom & Hyperrealism Tattoos",
  },
  {
    icon: Award,
    title: "Certified",
    description: "Hygiene & safety trained",
  },
  {
    icon: Heart,
    title: "Philosophy",
    description: "Art with meaning",
  },
];

export default function ArtistBio() {
  return (
    <section id="artist" className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-foreground/10 to-foreground/5 relative overflow-hidden">
              <Image
                src="/images/sumit.png"
                alt="Artist Sumit Tank"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Decorative frame */}
              <div className="absolute inset-4 border border-foreground/10 pointer-events-none" />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-foreground text-background px-6 py-4 shadow-xl transition-colors duration-500">
              <p className="text-sm font-bold uppercase tracking-wider">Est. 2016</p>
            </div>
          </motion.div>

          {/* Right: Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
                The Artist/Founder
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
                Sumit Tank
              </h2>
            </div>

            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
              I’m Sumit M. Tank, a solo tattoo artist and founder of Kaal Chakkra Tattoo & Academy, Mumbai, with over 9 years of experience in the tattoo industry. I work completely one-on-one with every client, personally handling everything from concept development and custom design to the final tattoo ensuring absolute focus, consistency, and quality. 

              </p>
              <p>
              My work is driven by the belief that a tattoo is not just ink on skin, but a story, an emotion, and a life moment captured forever. I specialize in custom-crafted tattoos, particularly realism, abstract, and biorganic styles, where each design is created from scratch to reflect the client’s personal journey. Known for my uncompromising quality, strong attention to detail, and strict standards of hygiene and safety, I treat every tattoo as a responsibility crafted with honesty, patience, and purpose—so my clients leave with meaningful art they can proudly carry for a lifetime.

              </p>
              <p>
              "A Tattoo is a lifetime investment. Choose the hand that understands the weight of your story.” — Sumit M. Tank
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={18} className="text-foreground/70" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{item.title}</p>
                    <p className="text-foreground/50 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

