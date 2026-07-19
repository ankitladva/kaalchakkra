"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#pro-program", label: "3-Month Program" },
  { href: "#realism-masterclass", label: "45-Day Masterclass" },
  { href: "#mentor", label: "Mentor" },
  { href: "#admission", label: "Admission" },
  { href: "#faq", label: "FAQ" },
];

const APPLY_MESSAGE =
  "Hi, I want to apply for a course at Kaal Chakkra Tattoo Academy. Please share the admission details.";

export default function AcademyNav() {
  return (
    <div className="sticky top-20 z-30 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3.5 text-sm font-medium text-foreground/60 hover:text-foreground whitespace-nowrap transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={getWhatsAppLink(APPLY_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto my-2 inline-flex items-center gap-2 px-4 py-1.5 bg-foreground text-background text-sm font-semibold hover:opacity-90 whitespace-nowrap transition-opacity duration-300"
          >
            <MessageCircle size={15} />
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
