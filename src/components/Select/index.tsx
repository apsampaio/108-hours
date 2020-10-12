import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<ISelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <Container>
      <select value="" id={name} {...rest}>
        <option value="" disabled hidden>
          {label}
        </option>

        {options.map(option => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
};

export default Select;
