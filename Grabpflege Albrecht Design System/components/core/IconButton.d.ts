export interface IconButtonProps {
  /** Lucide slug. */
  name?: string;
  /** Required accessible label. */
  label: string;
  size?: number;
  variant?: "secondary" | "ghost";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
