export interface BadgeProps {
  children?: React.ReactNode;
  tone?: "neutral" | "accent" | "success" | "warning" | "danger" | "info";
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
