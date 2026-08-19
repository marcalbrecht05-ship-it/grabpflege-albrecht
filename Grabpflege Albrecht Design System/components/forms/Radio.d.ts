export interface RadioProps {
  label?: React.ReactNode;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
