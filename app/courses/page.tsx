import type { Metadata } from "next";
import AcademyHero from "@/components/sections/AcademyHero";
import AcademyNav from "@/components/sections/AcademyNav";
import AcademyMentor from "@/components/sections/AcademyMentor";
import Courses from "@/components/sections/Courses";
import RealismMasterclass from "@/components/sections/RealismMasterclass";
import AcademyClosing from "@/components/sections/AcademyClosing";

export const metadata: Metadata = {
  title: "Tattoo Courses | Kaal Chakkra Tattoo Academy | Sumit Tank",
  description:
    "Become a pro tattoo artist with the 3-Month Advanced Tattooing Program and the 45-Day Advanced Realism Masterclass at Kaal Chakkra Tattoo Academy. Learn from Sumit M. Tank through hands-on studio training, live demonstrations, and personalized mentorship.",
};

export default function CoursesPage() {
  return (
    <>
      <AcademyHero />
      <AcademyNav />
      <AcademyMentor />
      <Courses />
      <RealismMasterclass />
      <AcademyClosing />
    </>
  );
}
