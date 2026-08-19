export interface SelectProps {
  label?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: React.CSSProperties;
  wrapperStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
