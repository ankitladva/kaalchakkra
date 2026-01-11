"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { MessageCircle, Calendar, Pencil } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    step: "01",
    title: "Reach Out",
    description: "Send us a message on WhatsApp with your tattoo idea",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Design Consultation",
    description: "We'll discuss your vision and create a custom design",
  },
  {
    icon: Calendar,
    step: "03",
    title: "Book Your Session",
    description: "Schedule your appointment and bring your tattoo to life",
  },
];

export default function Booking() {
  return (
    <section className="py-12 md:py-16 bg-background border-t border-border relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L100 50L50 100L0 50Z' fill='none' stroke='currentColor' stroke-width='1'/%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
            Ready to Start?
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground">
            Book Your Tattoo
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            Begin your tattoo journey with a simple consultation. We&apos;ll work
            together to create something meaningful and unique to you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 border border-foreground/20 flex items-center justify-center mx-auto">
                  <item.icon size={32} className="text-foreground/70" />
                </div>
                <span className="absolute -top-3 -right-3 text-xs font-bold bg-foreground text-background px-2 py-1">
                  {item.step}
                </span>
              </div>
              <h3 className="font-bold text-xl mb-3 text-foreground">{item.title}</h3>
              <p className="text-foreground/50 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button variant="primary" size="lg" whatsapp>
            Book Now on WhatsApp
          </Button>
          <p className="text-foreground/40 text-sm mt-4">
            Usually responds within 2 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

