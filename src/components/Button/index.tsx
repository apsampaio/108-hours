import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  name: string;
}

const Button: React.FC<IButtonProps> = ({ name, ...rest }) => {
  return <Container {...rest}>{name}</Container>;
};

export default Button;
