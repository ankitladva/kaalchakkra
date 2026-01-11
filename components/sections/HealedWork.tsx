"use client";

import { motion } from "framer-motion";
import TattooCard from "@/components/ui/TattooCard";
import tattooData from "@/data/tattoos.json";

export default function HealedWork() {
  const healedTattoos = tattooData.tattoos.filter((t) => t.healed);

  return (
    <section id="healed" className="py-12 md:py-16 bg-background border-t border-border">
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
            Long-Term Quality
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">Healed Work</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl mx-auto">
            True quality stands the test of time. These photos show how our
            tattoos look after complete healing — bold, clear, and vibrant.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {healedTattoos.map((tattoo, index) => (
            <TattooCard
              key={tattoo.id}
              slug={tattoo.slug}
              name={tattoo.name}
              style={tattoo.style}
              image={tattoo.image}
              index={index}
            />
          ))}
        </div>

        {/* Note */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-foreground/40 text-sm mt-12"
        >
          * All healed photos are taken 2-6 months after the tattoo session
        </motion.p> */}
      </div>
    </section>
  );
}

