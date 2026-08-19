export interface TagProps {
  children?: React.ReactNode;
  selected?: boolean;
  onRemove?: (e: React.MouseEvent) => void;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;
