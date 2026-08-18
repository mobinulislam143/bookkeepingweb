import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

export interface PhotoProps {
  src: StaticImageData;
  alt: string;
  /** CSS aspect-ratio string, e.g. "16/9". The image always covers, never stretches. */
  ratio?: string;
  /** Set on the single above-the-fold hero image only. */
  priority?: boolean;
  radius?: string;
  sizes?: string;
  /** Object position, for steering the crop on tall/wide ratios. */
  position?: string;
  style?: CSSProperties;
  className?: string;
}

/**
 * Supplied photography, rendered through next/image so it is resized, served as
 * AVIF/WebP, and lazy-loaded unless explicitly marked priority. Static imports
 * carry intrinsic dimensions, so no layout shift.
 */
export function Photo({
  src,
  alt,
  ratio = "4/3",
  priority = false,
  radius = "var(--radius-lg)",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  position = "center",
  style,
  className,
}: PhotoProps) {
  return (
    <div
      className={className}
      style={{
        position: "relative",
        aspectRatio: ratio,
        width: "100%",
        borderRadius: radius,
        overflow: "hidden",
        background: "var(--ivory-200)",
        ...style,
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </div>
  );
}
