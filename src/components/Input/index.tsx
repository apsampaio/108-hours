import React, { InputHTMLAttributes, useState, useCallback, useRef, useEffect } from "react";
import { IconBaseProps } from "react-icons";
import { useField } from "@unform/core";

import { Container } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.FunctionComponentElement<IconBaseProps>
}

const Input: React.FC<InputProps> = ({icon: Icon, name, ...rest }) => {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  const handleInputBlue = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container isFocused={isFocused}>
      <input ref={inputRef} defaultValue={defaultValue} onFocus={handleInputFocus} onBlur={handleInputBlue} {...rest} />
      {Icon}
    </Container>
  );
};

export default Input;
