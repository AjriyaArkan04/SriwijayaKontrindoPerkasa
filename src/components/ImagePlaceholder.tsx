import { ImageIcon } from "lucide-react";
import { cx } from "@/lib/utils";

type ImagePlaceholderProps = {
  /** Intended final path under /public, documented in IMAGE_GUIDE.md */
  src: string;
  alt: string;
  aspect?: string; // e.g. "4/3", "16/9", "3/4", "1/1"
  label?: string;
  className?: string;
  dark?: boolean;
};

/**
 * Polished placeholder for a photograph that has not been supplied yet.
 * Renders a neutral, on-brand block with a subtle hairline texture and a
 * caption naming the exact file path the real photo should replace.
 *
 * To swap in a real photo later: drop the file at the path shown (see
 * IMAGE_GUIDE.md), then replace this component's usage with a Next.js
 * <Image src={src} alt={alt} fill className="object-cover" />.
 */
export function ImagePlaceholder({
  src,
  alt,
  aspect = "4/3",
  label = "PROJECT IMAGE",
  className,
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={cx(
        "relative w-full overflow-hidden border",
        dark ? "border-white/15 bg-navy-soft" : "border-line bg-paper-dim",
        className
      )}
      style={{ aspectRatio: aspect }}
    >
      <div
        className={cx(
          "absolute inset-0 opacity-[0.35]",
          dark ? "opacity-[0.12]" : ""
        )}
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${
            dark ? "rgba(255,255,255,0.06)" : "rgba(14,31,69,0.06)"
          } 0px, ${dark ? "rgba(255,255,255,0.06)" : "rgba(14,31,69,0.06)"} 1px, transparent 1px, transparent 10px)`,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
        <ImageIcon
          className={cx("h-5 w-5", dark ? "text-white/40" : "text-steel-light")}
          strokeWidth={1.5}
        />
        <span
          className={cx(
            "font-mono text-[10px] tracking-[0.18em] uppercase",
            dark ? "text-white/45" : "text-steel-light"
          )}
        >
          {label}
        </span>
        <span
          className={cx(
            "font-mono text-[9px] tracking-tight break-all max-w-[85%]",
            dark ? "text-white/30" : "text-steel-light/80"
          )}
        >
          {src}
        </span>
      </div>
    </div>
  );
}
