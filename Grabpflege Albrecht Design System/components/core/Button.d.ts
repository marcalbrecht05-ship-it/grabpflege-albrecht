/**
 * @startingPoint section="Core" subtitle="Buttons, icon buttons and links" viewport="700x200"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = moss fill, secondary = hairline outline, ghost = text only, inverse = paper on dark. */
  variant?: "primary" | "secondary" | "ghost" | "inverse";
  size?: "sm" | "md" | "lg";
  /** Pass an <Icon /> element. */
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
