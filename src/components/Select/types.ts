export interface SelectOption {
  id: number | string;
  name: React.ReactNode;
  label?: React.ReactNode;
  unavailable?: boolean;
}
