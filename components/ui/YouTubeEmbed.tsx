"use client";

import { extractYouTubeId } from "@/lib/utils";

interface YouTubeEmbedProps {
  url: string;
  title?: string;
}

export default function YouTubeEmbed({
  url,
  title = "YouTube video",
}: YouTubeEmbedProps) {
  const videoId = extractYouTubeId(url);

  if (!videoId) {
    return (
      <div className="aspect-video bg-white/5 flex items-center justify-center">
        <p className="text-white/40">Video unavailable</p>
      </div>
    );
  }

  return (
    <div className="relative aspect-video bg-black overflow-hidden">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

