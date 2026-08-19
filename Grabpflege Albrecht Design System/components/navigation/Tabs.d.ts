/**
 * @startingPoint section="Navigation" subtitle="Tabs and site header navigation" viewport="700x220"
 */
export interface TabsProps {
  items?: Array<string | { value: string; label: string }>;
  value?: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
