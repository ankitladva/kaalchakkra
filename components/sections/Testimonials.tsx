"use client";

import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import testimonialData from "@/data/testimonials.json";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 md:py-16 bg-background border-t border-border">
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
            What Clients Say
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground">
            Client Reviews
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="!pb-16"
          >
            {testimonialData.testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="bg-foreground/5 border border-border p-8 h-full flex flex-col">
                  {/* Quote icon */}
                  <Quote
                    size={32}
                    className="text-foreground/20 mb-6"
                  />

                  {/* Quote text */}
                  <blockquote className="text-foreground/70 leading-relaxed flex-grow">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="mt-8 pt-6 border-t border-border flex items-center gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-foreground/10 flex items-center justify-center font-bold text-foreground/60">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-foreground/50 text-sm">
                        {testimonial.tattooType} • {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

