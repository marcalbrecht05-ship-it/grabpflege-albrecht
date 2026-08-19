export interface SectionHeadingProps {
  /** Uppercase tracked kicker. */
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  level?: 1 | 2 | 3;
  rule?: boolean;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
