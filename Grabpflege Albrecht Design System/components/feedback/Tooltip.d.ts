export interface TooltipProps {
  label: string;
  children?: React.ReactNode;
  placement?: "top" | "bottom";
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
