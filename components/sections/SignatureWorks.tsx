"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import tattooData from "@/data/tattoos.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SignatureWorks() {
  const featuredTattoos = tattooData.tattoos.filter((t) => t.featured);

  return (
    <section id="portfolio" className="py-12 md:py-16 bg-background overflow-hidden">
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
            Featured Collection
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Signature Works
          </h2>
        </motion.div>
      </div>

      {/* Slider */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative px-4 md:px-8"
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="!pb-16"
        >
          {featuredTattoos.map((tattoo) => (
            <SwiperSlide key={tattoo.id}>
              <Link href={`/tattoo/${tattoo.slug}`} className="group block">
                <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
                  {/* Placeholder gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5" />

                  <Image
                    src={tattoo.image}
                    alt={tattoo.name}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    {/* <p className="text-foreground/50 text-sm uppercase tracking-wider mb-2">
                      {tattoo.style}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {tattoo.name}
                    </h3> */}
                    <div className="flex items-center gap-2 text-white transition-colors">
                      <span className="text-sm font-medium">View Story</span>
                      <ArrowUpRight
                        size={16}
                        className="text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

