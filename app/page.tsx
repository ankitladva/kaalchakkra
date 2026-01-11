import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureWorks from "@/components/sections/SignatureWorks";
import HealedWork from "@/components/sections/HealedWork";
import ArtistBio from "@/components/sections/ArtistBio";
import Hygiene from "@/components/sections/Hygiene";
import Testimonials from "@/components/sections/Testimonials";
import Booking from "@/components/sections/Booking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SignatureWorks />
      <HealedWork />
      <ArtistBio />
      <Hygiene />
      <Testimonials />
      <Booking />
      <Contact />
    </>
  );
}
