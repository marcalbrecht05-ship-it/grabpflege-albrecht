export interface SwitchProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
