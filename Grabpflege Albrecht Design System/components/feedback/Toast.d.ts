export interface ToastProps {
  tone?: "neutral" | "success" | "warning" | "danger";
  title: string;
  description?: string;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;
