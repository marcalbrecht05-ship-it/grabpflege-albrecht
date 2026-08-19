/**
 * @startingPoint section="Core" subtitle="Cards, badges, tags and section headings" viewport="700x300"
 */
export interface CardProps {
  children?: React.ReactNode;
  /** surface = paper + hairline, inset = warm grey, accent = moss tint, inverse = charcoal. */
  variant?: "surface" | "inset" | "accent" | "inverse";
  /** Lifts shadow on hover. */
  interactive?: boolean;
  padding?: string | number;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
