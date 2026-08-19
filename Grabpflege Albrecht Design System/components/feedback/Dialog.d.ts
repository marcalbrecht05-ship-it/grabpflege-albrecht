export interface DialogProps {
  open?: boolean;
  title: string;
  eyebrow?: string;
  children?: React.ReactNode;
  /** Buttons, right-aligned. */
  footer?: React.ReactNode;
  onClose?: () => void;
  width?: number;
}
export declare function Dialog(props: DialogProps): JSX.Element;
