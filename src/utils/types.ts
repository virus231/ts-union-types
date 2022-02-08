type StringChangeHandler = (newValue: string) => void;
type NumberChangeHandler = (newValue: number) => void;
type BooleanChangeHandler = (newValue: boolean) => void;

interface BaseInputDefinition {
  id: string;
  label: string;
}

interface TextInputDefinition extends BaseInputDefinition {
  type: "text";
  value: string;
  onChange: StringChangeHandler;
}

interface NumberInputDefinition extends BaseInputDefinition {
  type: "number";
  value: number;
  onChange: NumberChangeHandler;
}

export interface CheckboxInputDefinition extends BaseInputDefinition {
  type: "checkbox";
  value: boolean;
  onChange: BooleanChangeHandler;
}

export type Input = TextInputDefinition | NumberInputDefinition | CheckboxInputDefinition;

// export interface IInput {
//     id: string;
//     type: 'text' | 'number' | 'checkbox';
//     value: string | number | boolean;
//     label: string;
//     onChange: StringChangeHandler | NumberChangeHandler | BooleanChangeHandler;
//     checked?: boolean;
// }