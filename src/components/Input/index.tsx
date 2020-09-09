import React, { InputHTMLAttributes, useState, useCallback } from "react";
import { Container } from "./styles";

interface InputProips extends InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProips> = ({ ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlue = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <input onFocus={handleInputFocus} onBlur={handleInputBlue} {...rest} />
    </Container>
  );
};

export default Input;
