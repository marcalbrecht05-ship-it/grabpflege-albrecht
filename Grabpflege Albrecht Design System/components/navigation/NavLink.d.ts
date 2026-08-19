export interface NavLinkProps {
  children?: React.ReactNode;
  href?: string;
  active?: boolean;
  /** inverse for use on charcoal or photographic headers. */
  tone?: "default" | "inverse";
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function NavLink(props: NavLinkProps): JSX.Element;
