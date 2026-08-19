import {
  Camera,
  Droplets,
  Flame,
  Flower2,
  Heart,
  Leaf,
  MapPin,
  ReceiptText,
  Sparkles,
  Sprout,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/** Botanisch-praktisches Icon-Vokabular des Design Systems, explizit importiert (tree-shakebar). */
const ICONS: Record<string, LucideIcon> = {
  Camera,
  Droplets,
  Flame,
  Flower2,
  Heart,
  Leaf,
  MapPin,
  ReceiptText,
  Sparkles,
  Sprout,
  UserRound,
};

interface IconProps {
  name: string;
  className?: string;
  "aria-hidden"?: boolean;
}

export function Icon({ name, className, ...props }: IconProps) {
  const Component = ICONS[name] ?? Leaf;
  return <Component className={className} aria-hidden {...props} />;
}
