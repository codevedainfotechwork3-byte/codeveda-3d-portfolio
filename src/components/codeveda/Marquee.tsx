import type { ReactNode } from "react";

export function Marquee({
  children,
  className,
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}) {
  return (
    <div className={`marquee-mask overflow-hidden ${className ?? ""}`}>
      <div
        className="flex gap-12 whitespace-nowrap animate-marquee"
        style={{ animationDirection: reverse ? "reverse" : "normal" }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}