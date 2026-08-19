/**
 * @startingPoint section="Forms" subtitle="Inputs, selects, checkboxes, radios and switches" viewport="700x340"
 */
export interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
