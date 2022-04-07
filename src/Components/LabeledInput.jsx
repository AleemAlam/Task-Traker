import React from "react";
import styled from "styled-components";
import { StyledInput, StyledText } from "../Styles/styledComponents";

const Container = styled.div`
  padding-top: ${(props) => props.top || 0}px;
  padding-bottom: ${(props) => props.bottom || 0}px;
  padding-left: ${(props) => props.left || 0}px;
  padding-right: ${(props) => props.right || 0}px;
`;

export default function LabeledInput({
  children,
  placeholder,
  value,
  handleChange,
  required,
  top,
  bottom,
  left,
  right,
  name,
}) {
  return (
    <Container top={top} bottom={bottom} left={left} right={right}>
      <StyledText size={12} bottom={4}>
        {required && <span style={{ color: "red" }}>*</span>}
        {children}
      </StyledText>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
      />
    </Container>
  );
}
