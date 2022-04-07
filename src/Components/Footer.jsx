import React from "react";
import styled from "styled-components";
import { StyledButton } from "../Styles/styledComponents";
const Container = styled.div`
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: center;
  padding: 15px 6px;
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 0}px;
  margin-left: ${(props) => props.left || 0}px;
  margin-right: ${(props) => props.right || 0}px;
`;

export default function Footer({
  top,
  bottom,
  left,
  right,
  clickable,
  handleClick,
}) {
  return (
    <Container top={top} bottom={bottom} left={left} right={right}>
      <StyledButton>Cancel</StyledButton>
      <StyledButton
        bgColor={clickable ? "#05C3DD" : "#C6C6C6"}
        color={clickable ? "white" : "#8D8D8D"}
        borderColor={clickable ? "#05C3DD" : "#c6c6c6"}
        onClick={handleClick}
        disabled={!clickable}
      >
        Add Activity
      </StyledButton>
    </Container>
  );
}
