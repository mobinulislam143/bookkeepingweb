import type { CSSProperties } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  ChevronDown,
  Clock,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  ReceiptText,
  Store,
  UserRound,
  X,
} from "lucide-react";

/**
 * The Lucide dependency lives in exactly one file, as the design system requires.
 * Swapping in a licensed icon set later means replacing this map — nothing else
 * in the codebase references icon internals.
 */
const ICONS = {
  "arrow-right": ArrowRight,
  "book-open": BookOpen,
  calculator: Calculator,
  check: Check,
  "chevron-down": ChevronDown,
  clock: Clock,
  "map-pin": MapPin,
  menu: Menu,
  minus: Minus,
  phone: Phone,
  plus: Plus,
  "receipt-text": ReceiptText,
  store: Store,
  "user-round": UserRound,
  x: X,
} as const;

export type IconName = keyof typeof ICONS;

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
}

/**
 * Icons are decorative and always sit beside a text label, so they are
 * aria-hidden. IconButton is the one exception and supplies its own label.
 */
export function Icon({
  name,
  size = 20,
  strokeWidth = 1.6,
  color = "currentColor",
  style,
}: IconProps) {
  const Glyph = ICONS[name];
  return (
    <span
      aria-hidden="true"
      style={{ display: "inline-flex", color, lineHeight: 0, ...style }}
    >
      <Glyph size={size} strokeWidth={strokeWidth} absoluteStrokeWidth />
    </span>
  );
}
