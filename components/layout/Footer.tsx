"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Phone, MapPin } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const socialLinks = [
  // { href: "https://www.instagram.com/kaal_chakkra_tattoo", icon: Instagram, label: "Instagram" },
  { href: "https://www.instagram.com/sumit.tank.857", icon: Instagram, label: "Instagram" },
  // { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#healed", label: "Healed Work" },
  { href: "#artist", label: "Artist" },
  { href: "/courses", label: "Courses" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 md:w-20 md:h-20 overflow-hidden theme-invert">
                  <Image
                    src="/logo.png"
                    alt="Kaal Chakkra Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                  KAAL CHAKKRA
                </span>
              </div>
            </Link>
            <p className="mt-2 text-foreground/60 max-w-md leading-relaxed text-lg">
            Kaal Chakkra Tattoo Studio. Creating meaningful,
              spiritual tattoo art that tells your story and transforms your
              body into a canvas of self-expression.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center text-foreground/60 hover:text-foreground hover:border-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground/40 mb-4">
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/60 hover:text-foreground transition-colors duration-300"
                >
                  <Phone size={18} />
                  <span>93260 77117</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-foreground/60">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  Kaal Chakkra Tattoo Studio
                  <br />
                  Mumbai, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-foreground/40 text-sm">
              © {new Date().getFullYear()} Sumit Tank. All rights reserved.
            </p>
            <p className="text-foreground/40 text-sm">
              Kaal Chakkra Tattoo Studio, Anand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

