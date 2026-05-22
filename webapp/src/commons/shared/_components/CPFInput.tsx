import * as React from 'react';
import { IMaskInput } from 'react-imask';

interface CPFInputProps {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
}

export const CPFInput = React.forwardRef<HTMLInputElement, CPFInputProps>(
  function CPFInput(props, ref) {
    const { onChange, ...other } = props;

    // Function to remove non-numeric characters
    const handleInputChange = (value: string) => {
      const cleanedValue = value.replace(/\D/g, ''); 
      onChange({ target: { name: props.name, value: cleanedValue } });
    };

    return (
      <IMaskInput
        {...other}
        inputRef={ref}
        mask="000.000.000-00"
        onAccept={(value: any) => handleInputChange(value)}
        overwrite
        unmask={true}
        onInput={(event: any) => handleInputChange(event.target.value)}
      />
    );
  },
);