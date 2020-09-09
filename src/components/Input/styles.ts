import styled, { css } from "styled-components";

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding: 24px;

  color: #333333;
  background: #fafafc;
  border: 1px solid #e6e6f0;

  display: flex;
  position: relative;
  align-items: center;

  ${(props) =>
    props.isFocused &&
    css`
      &::after {
        content: "";
        background: #ca53d7;
        position: absolute;
        bottom: 15%;
        left: 0;
        height: 70%;
        width: 3px;
        border-radius: 5px;
      }
    `}

  input {
    font-size: 16px;
    color: #333333;
    flex: 1;
    background: transparent;
    border: 0;
  }

  &:first-of-type {
    border-radius: 8px 8px 0px 0px;
  }

  &:last-of-type {
    border-radius: 0px 0px 8px 8px;
  }

  input::-webkit-input-placeholder {
    color: #9c98a6;
  }
`;
