"use client";

import { motion } from "framer-motion";
import TattooCard from "@/components/ui/TattooCard";
import tattooData from "@/data/tattoos.json";

export default function Portfolio() {
  const allTattoos = tattooData.tattoos.filter((t) => !t.healed);

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-white/50 text-sm uppercase tracking-[0.2em] mb-4">
            My Work
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Tattoo Portfolio
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            Every piece tells a unique story. Explore the collection of custom
            tattoos created with precision, passion, and purpose.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

