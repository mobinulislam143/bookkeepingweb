import Image, { type StaticImageData } from "next/image";
import type { CSSProperties, ReactNode } from "react";

export interface PhotoProps {
  src: StaticImageData;
  alt: string;
  /** CSS aspect-ratio. The image always covers — it is never stretched. */
  ratio?: string;
  /** Steer the crop rather than letting the subject fall out of frame. */
  position?: string;
  priority?: boolean;
  sizes?: string;
  radius?: string;
  /** Annotation panels, captions — anything layered over the photograph. */
  overlay?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

/**
 * Supplied photography, served through next/image: resized, AVIF/WebP, and
 * lazy unless explicitly prioritised. Static imports carry intrinsic
 * dimensions, so nothing shifts on load.
 */
export function Photo({
  src,
  alt,
  ratio = "4/3",
  position = "center",
  priority = false,
  sizes = "(max-width: 900px) 100vw, 50vw",
  radius,
  overlay,
  className,
  style,
}: PhotoProps) {
  return (
    <figure
      className={`figure${className ? ` ${className}` : ""}`}
      style={{ aspectRatio: ratio, borderRadius: radius, ...style }}
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
      {overlay}
    </figure>
  );
}
