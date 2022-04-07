import React from "react";
import styled from "styled-components";
import { Title } from "../Styles/styledComponents";

const Container = styled.div`
  background-color: #f9f9fa;
  padding: 20px;
  padding-bottom: 50px;
`;

export default function Header({ children }) {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  );
}
