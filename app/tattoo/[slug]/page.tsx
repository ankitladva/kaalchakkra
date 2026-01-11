import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import tattooData from "@/data/tattoos.json";
import TattooDetailClient from "./TattooDetailClient";

interface TattooPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return tattooData.tattoos.map((tattoo) => ({
    slug: tattoo.slug,
  }));
}

export async function generateMetadata({ params }: TattooPageProps) {
  const { slug } = await params;
  const tattoo = tattooData.tattoos.find((t) => t.slug === slug);

  if (!tattoo) {
    return {
      title: "Tattoo Not Found | Sumit Tank",
    };
  }

  return {
    title: `${tattoo.name} | Sumit Tank Tattoo`,
    description: tattoo.description,
    openGraph: {
      title: `${tattoo.name} | Sumit Tank Tattoo`,
      description: tattoo.description,
      images: [tattoo.image],
    },
  };
}

export default async function TattooPage({ params }: TattooPageProps) {
  const { slug } = await params;
  const tattoo = tattooData.tattoos.find((t) => t.slug === slug);

  if (!tattoo) {
    notFound();
  }

  // Get related tattoos (same style or random)
  const relatedTattoos = tattooData.tattoos
    .filter((t) => t.id !== tattoo.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link
          href="/#portfolio"
          className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground transition-colors group"
        >
          <ArrowLeft
            size={18}
            className="transform group-hover:-translate-x-1 transition-transform"
          />
          <span>Back to Portfolio</span>
        </Link>
      </div>

      {/* Content (including hero image) - all client-side */}
      <TattooDetailClient tattoo={tattoo} relatedTattoos={relatedTattoos} />
    </div>
  );
}
