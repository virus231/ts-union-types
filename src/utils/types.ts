type StringChangeHandler = (newValue: string) => void;
type NumberChangeHandler = (newValue: number) => void;
type BooleanChangeHandler = (newValue: boolean) => void;

interface WithIdAndType<T extends "text" | "number" | "checkbox"> {
  id: string;
  type: T;
  label: string;

}

interface TextInputProps {
  value: string;
  onChange: StringChangeHandler;
}

interface NumberInputProps {
  value: number;
  onChange: NumberChangeHandler;
}

interface CheckboxProps {
  value: boolean;
  onChange: BooleanChangeHandler;
}

type TextInputDefinition = TextInputProps & WithIdAndType<"text">;

type NumberInputDefinition = NumberInputProps & WithIdAndType<"number">;

type CheckboxInputDefinition = CheckboxProps & WithIdAndType<"checkbox">;

// interface BaseInputDefinition {
//   id: string;
//   label: string;
// }

// interface TextInputDefinition extends BaseInputDefinition {
//   type: "text";
//   value: string;
//   onChange: StringChangeHandler;
// }

// interface NumberInputDefinition extends BaseInputDefinition {
//   type: "number";
//   value: number;
//   onChange: NumberChangeHandler;
// }

// export interface CheckboxInputDefinition extends BaseInputDefinition {
//   type: "checkbox";
//   value: boolean;
//   onChange: BooleanChangeHandler;
// }

export type Input =
  | TextInputDefinition
  | NumberInputDefinition
  | CheckboxInputDefinition;

// export interface IInput {
//     id: string;
//     type: 'text' | 'number' | 'checkbox';
//     value: string | number | boolean;
//     label: string;
//     onChange: StringChangeHandler | NumberChangeHandler | BooleanChangeHandler;
//     checked?: boolean;
// }
