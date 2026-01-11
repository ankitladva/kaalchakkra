"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface TattooCardProps {
  slug: string;
  name: string;
  style: string;
  image: string;
  index?: number;
}

export default function TattooCard({
  slug,
  name,
  style,
  image,
  index = 0,
}: TattooCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/tattoo/${slug}`} className="group block relative">
        <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
          {/* Placeholder gradient for missing images */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />
          
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={(e) => {
              // Hide broken image
              e.currentTarget.style.display = "none";
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

          {/* Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              <p className="text-white/60 text-sm font-medium uppercase tracking-wider mb-2">
                {style}
              </p>
              <h3 className="text-xl font-bold text-white">{name}</h3>
            </div>

            {/* Arrow indicator */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center opacity-0 transform translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              <ArrowUpRight size={18} className="text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

