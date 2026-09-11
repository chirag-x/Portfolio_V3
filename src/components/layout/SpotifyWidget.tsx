"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";
import Image from "next/image";

export default function SpotifyWidget() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchSpotify = async () => {
      try {
        const res = await fetch("/api/spotify");
        const json = await res.json();
        setData(json);
      } catch (e) {
        console.error("Failed to load Spotify data");
      }
    };

    fetchSpotify();
    const interval = setInterval(fetchSpotify, 15000); // Check every 15s
    return () => clearInterval(interval);
  }, []);

  if (!data?.isPlaying) {
    return (
      <div className="flex items-center gap-3 px-4 py-2 bg-muted/30 border border-border/50 rounded-full text-sm text-muted-foreground w-max">
        <Music2 className="w-4 h-4" />
        <span>Not listening to anything right now.</span>
      </div>
    );
  }

  return (
    <a 
      href={data.songUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center gap-3 px-4 py-2 bg-black dark:bg-card border border-[#1DB954]/30 hover:border-[#1DB954] rounded-full text-sm w-max transition-all group shadow-lg shadow-[#1DB954]/5"
    >
      <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 animate-pulse group-hover:animate-none">
        <Image src={data.albumImageUrl} alt={data.albumImageUrl} fill sizes="24px" className="object-cover" />
      </div>
      <div className="flex flex-col max-w-[150px] md:max-w-[200px]">
        <span className="font-bold text-[#1DB954] truncate text-xs">Listening on Spotify</span>
        <span className="text-foreground truncate text-xs">{data.title} - {data.artist}</span>
      </div>
    </a>
  );
}
