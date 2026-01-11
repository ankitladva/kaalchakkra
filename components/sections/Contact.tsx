"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Instagram, Youtube } from "lucide-react";
import Button from "@/components/ui/Button";
import { getWhatsAppLink } from "@/lib/utils";

const contactInfo = [
  {
    icon: MapPin,
    title: "Studio Location",
    details: ["Kaal Chakkra Tattoo Studio", "Mumbai, India"],
  },
  {
    icon: Phone,
    title: "Contact",
    details: ["93260 77117", "WhatsApp Available"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sun: 11:00 AM - 9:00 PM (By Appointment)"],
  },
];

const socialLinks = [
  // { href: "https://www.instagram.com/kaal_chakkra_tattoo", icon: Instagram, label: "Instagram" },
  { href: "https://www.instagram.com/sumit.tank.857", icon: Instagram, label: "Instagram" },
  
];

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
              Get In Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground">
              Let&apos;s Create
              <br />
              <span className="text-foreground/70">Something</span>
              <br />
              Beautiful
            </h2>

            <div className="space-y-8 mb-10">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 border border-foreground/20 flex items-center justify-center flex-shrink-0">
                    <item.icon size={20} className="text-foreground/60" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">{item.title}</p>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-foreground/50 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground/40 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
              <Button variant="primary" className="w-full flex-1 max-w-xs" whatsapp>
                WhatsApp Us
              </Button>
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] border border-border relative overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Kaal+Chakkra+Tattoo+Studio+Mumbai&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Kaal Chakkra Tattoo Studio Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

