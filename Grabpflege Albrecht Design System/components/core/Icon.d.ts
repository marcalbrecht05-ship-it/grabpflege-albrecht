export interface IconProps {
  /** Lucide icon slug, e.g. "leaf", "phone", "calendar-days". */
  name?: string;
  /** Pixel box, default 20. */
  size?: number;
  style?: React.CSSProperties;
  className?: string;
}
export declare function Icon(props: IconProps): JSX.Element;
