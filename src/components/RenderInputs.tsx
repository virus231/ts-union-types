interface Input {
    id: string;
    type: 'text' | 'number' | 'checkbox';
    value: string | number | boolean;
    label: string;
    onChange(newValue: string | number | boolean): void;
}

const inputs: Input[] = [
    {
        type: 'text',
        onChange: (newValue: string | number | boolean) => { }; // allowed, but not correct for text input
    },
    {
        type: 'text',
        onChange: (newValue: string) => { }; // wanted, but throws TypeScript error
    }
]


export const RenderInputs = () => {
    return <form>
        {inputs.map(i => {
            switch (i.type) {
                case 'text':
                    return <TextInput
                        key={i.id}
                        value={i.value as string}
                        onChange={i.onChange as (newValue: string) => void}
                        label={i.label}
                    />;
                case 'number':
                    return <NumberInput
                        key={i.id}
                        value={i.value as number}
                        onChange={i.onChange as (newValue: number) => void}
                        label={i.label}
                    />;
                case 'checkbox':
                    return <Checkbox
                        key={i.id}
                        checked={i.value as boolean}
                        onChange={i.onChange as (newValue: boolean) => void}
                        label={i.label}
                    />;
            }
        })}
    </form>;
}