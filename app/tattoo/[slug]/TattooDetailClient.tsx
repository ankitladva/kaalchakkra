"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";
import YouTubeEmbed from "@/components/ui/YouTubeEmbed";
import { getWhatsAppLinkForTattoo } from "@/lib/utils";

interface Tattoo {
  id: string;
  slug: string;
  name: string;
  style: string;
  image: string;
  featured: boolean;
  healed: boolean;
  description: string;
  symbolism: string;
  youtubeUrl: string;
}

interface TattooDetailClientProps {
  tattoo: Tattoo;
  relatedTattoos: Tattoo[];
}

export default function TattooDetailClient({
  tattoo,
  relatedTattoos,
}: TattooDetailClientProps) {
  return (
    <>
      {/* Hero Image */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] max-h-[70vh] overflow-hidden">
        {/* Placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5" />

        <Image
          src={tattoo.image}
          alt={tattoo.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Title & Style */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-foreground/50 text-sm uppercase tracking-[0.2em] mb-4">
                {tattoo.style}
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground">
                {tattoo.name}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground/80">The Story</h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {tattoo.description}
              </p>
            </motion.div>

            {/* Symbolism */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="text-xl font-bold text-foreground/80">
                Symbolism & Meaning
              </h2>
              <p className="text-foreground/70 leading-relaxed text-lg">
                {tattoo.symbolism}
              </p>
            </motion.div>

            {/* YouTube Video */}
            {tattoo.youtubeUrl && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-xl font-bold text-foreground/80">
                  Watch the Story
                </h2>
                <YouTubeEmbed url={tattoo.youtubeUrl} title={tattoo.name} />
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Booking CTA */}
            <div className="bg-foreground/5 border border-border p-8">
              <h3 className="text-xl font-bold mb-4 text-foreground">Love This Design?</h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                Get a custom tattoo inspired by this design. Book a consultation
                to discuss your vision.
              </p>
              <a
                href={getWhatsAppLinkForTattoo(tattoo.name)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="primary" size="lg" className="w-full" whatsapp>
                  Book a Tattoo Like This
                </Button>
              </a>
            </div>

            {/* Tattoo Info */}
            <div className="bg-foreground/5 border border-border p-8">
              <h3 className="text-lg font-bold mb-6 text-foreground">Tattoo Details</h3>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <span className="text-foreground/50">Style</span>
                  <span className="font-medium text-foreground">{tattoo.style}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground/50">Type</span>
                  <span className="font-medium text-foreground">
                    {tattoo.healed ? "Healed" : "Fresh"}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span className="text-foreground/50">Artist</span>
                  <span className="font-medium text-foreground">Sumit Tank</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Related Tattoos */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 pt-16 border-t border-border"
        >
          <h2 className="text-2xl font-bold mb-12 text-foreground">More Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedTattoos.map((related) => (
              <Link
                key={related.id}
                href={`/tattoo/${related.slug}`}
                className="group block"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-foreground/5">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 to-foreground/5" />

                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <p className="text-foreground/50 text-sm uppercase tracking-wider mb-1">
                      {related.style}
                    </p>
                    <h3 className="text-lg font-bold flex items-center gap-2 text-foreground">
                      {related.name}
                      <ArrowUpRight
                        size={16}
                        className="opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                      />
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </>
  );
}
