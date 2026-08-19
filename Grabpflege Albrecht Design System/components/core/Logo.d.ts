export interface LogoProps {
  /** full = mark + wordmark + tagline, mark = arch stone, wordmark = type lockup. */
  variant?: "full" | "mark" | "wordmark";
  height?: number;
  /** Relative path to the assets folder from the consuming page. */
  assetBase?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
