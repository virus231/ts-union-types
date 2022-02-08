interface CheckboxProps {
  checked: boolean;
  onChange(newValue: boolean): void;
  label: string;
}

interface NumberInputProps {
  value: number;
  onChange(newValue: number): void;
  label: string;
}

interface TextInputProps {
  value: string;
  onChange(newValue: string): void;
  label: string;
}
