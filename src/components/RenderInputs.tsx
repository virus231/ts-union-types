import { Input } from "../utils/types";
import { Checkbox } from "./Checkbox";
import { NumberInput } from "./NumberInput";
import { TextInput } from "./TextInput";

const inputs: Input[] = [
    {
        type: 'text',
        onChange: (newValue: string) => { },
        value: "",
        label: "Text Input",
        id: "text-input"
    },
    {
        type: 'number',
        onChange: (newValue: number) => { },
        value: 0,
        label: "Number Input",
        id: "number-input"
    },
    {
        type: 'checkbox',
        onChange: (newValue: boolean) => {},
        value: false,
        label: "Number Input",
        id: "checkbox-input",
    }
]


export const RenderInputs = () => {
    return <form>
        {inputs.map(({ id, type, value, onChange, label }) => {
            switch (type) {
                case 'text':
                    return <TextInput
                        key={id}
                        value={value}
                        onChange={onChange}
                        label={label}
                    />;
                case 'number':
                    return <NumberInput
                        key={id}
                        value={value}
                        onChange={onChange}
                        label={label}
                    />;
                case 'checkbox':
                    return <Checkbox
                        key={id}
                        checked={value}
                        onChange={onChange}
                        label={label}
                    />;
            }
        })}
    </form>
}