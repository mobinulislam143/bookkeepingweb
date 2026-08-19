import type { CSSProperties } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronDown,
  Compass,
  FileBarChart2,
  FileText,
  LineChart,
  MapPin,
  Menu,
  Minus,
  Phone,
  Plus,
  ReceiptText,
  Table2,
  UserRound,
  X,
} from "lucide-react";

/**
 * The icon dependency is referenced in exactly one file, so swapping sets
 * later means editing this map and nothing else.
 */
const ICONS = {
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  building: Building2,
  chart: LineChart,
  check: Check,
  "chevron-down": ChevronDown,
  compass: Compass,
  "file-text": FileText,
  report: FileBarChart2,
  "map-pin": MapPin,
  menu: Menu,
  minus: Minus,
  phone: Phone,
  plus: Plus,
  receipt: ReceiptText,
  table: Table2,
  user: UserRound,
  x: X,
} as const;

export type IconName = keyof typeof ICONS;

export interface IconProps {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  color?: string;
  style?: CSSProperties;
  className?: string;
}

/** Decorative by default: icons always sit beside a text label. */
export function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
  color = "currentColor",
  style,
  className,
}: IconProps) {
  const Glyph = ICONS[name];
  return (
    <Glyph
      aria-hidden="true"
      size={size}
      strokeWidth={strokeWidth}
      absoluteStrokeWidth
      color={color}
      className={className}
      style={{ flex: "none", ...style }}
    />
  );
}
