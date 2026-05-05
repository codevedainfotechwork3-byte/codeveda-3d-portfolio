import { useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = {
  poster: string;
  videoSrc?: string;
  tag: string;
  index: number;
  onClick?: () => void;
};

export function HoverVideoCard({ poster, videoSrc, tag, index, onClick }: Props) {
  const vref = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);

  const onEnter = () => {
    setHover(true);
    vref.current?.play().catch(() => {});
  };
  const onLeave = () => {
    setHover(false);
    if (vref.current) {
      vref.current.pause();
      vref.current.currentTime = 0;
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="group relative block w-full text-left aspect-[3/4] overflow-hidden rounded-2xl bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary"
    >
      <img
        src={poster}
        alt={tag}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-110"
      />
      {videoSrc && (
        <video
          ref={vref}
          src={videoSrc}
          muted
          loop
          playsInline
          preload="none"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hover ? "opacity-100" : "opacity-0"}`}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-90 transition" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
        <div className="w-16 h-16 rounded-full bg-foreground/90 text-background flex items-center justify-center backdrop-blur shadow-2xl">
          <Play className="w-5 h-5 ml-1" fill="currentColor" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-wider px-3 py-1.5 rounded-full bg-background/70 backdrop-blur border border-border">
          {tag}
        </span>
        <span className="font-display italic text-sm">Reel #{(index + 1).toString().padStart(2, "0")}</span>
      </div>
    </button>
  );
}