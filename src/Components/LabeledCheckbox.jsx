import React from "react";
import styled from "styled-components";
import { StyledCheckBox, StyledText } from "../Styles/styledComponents";

const Container = styled.div`
  margin: 2px;
`;

export default function LabeledCheckbox({
  children,
  required,
  handleChange,
  name,
  value,
  checked,
}) {
  return (
    <Container>
      <StyledText size={12}>
        {required && <span style={{ color: "red" }}>*</span>}
        {children}
      </StyledText>
      <StyledCheckBox
        type="checkbox"
        name={name}
        onChange={handleChange}
        checked={checked}
      />
    </Container>
  );
}
