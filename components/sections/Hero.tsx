"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Set loop property explicitly
      video.loop = true;
      
      // Ensure video plays
      const playVideo = () => {
        video.play().catch((error) => {
          console.log("Video autoplay prevented:", error);
        });
      };

      // Play immediately
      playVideo();

      // Handle video end to restart (backup for loop attribute)
      const handleVideoEnd = () => {
        video.currentTime = 0;
        playVideo();
      };

      // Handle timeupdate to check if video is near end
      const handleTimeUpdate = () => {
        // If video is very close to end, restart it
        if (video.currentTime >= video.duration - 0.1 && video.duration > 0) {
          video.currentTime = 0;
        }
      };

      // Add event listeners
      video.addEventListener("ended", handleVideoEnd);
      video.addEventListener("timeupdate", handleTimeUpdate);
      video.addEventListener("loadedmetadata", () => {
        video.loop = true;
        playVideo();
      });

      return () => {
        video.removeEventListener("ended", handleVideoEnd);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ display: "block" }}
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6 lg:space-y-8 text-right"
        >
          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-foreground"
          >
            KAAL
            <br />
            CHAKKRA
            {/* <span className="block text-foreground/70">CHAKKRA</span> */}
            <span className="block text-foreground/70 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Tattoo Studio</span>

          </motion.h1>

          {/* Subtitle */}
          {/* <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-foreground/60 text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Founder of{" "}
            <span className="text-foreground font-semibold">
              Kaal Chakkra Tattoo Studio
            </span>
            , Anand
          </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-end sm:justify-end gap-4 pt-4 ml-auto"
          >
            <Button variant="primary" size="lg" whatsapp>
              Book Now
            </Button>
            <Button variant="outline" size="lg" href="#portfolio">
              View Portfolio
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

