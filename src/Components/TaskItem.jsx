import React from "react";
import styled from "styled-components";
import { StyledText } from "../Styles/styledComponents";

const Container = styled.div`
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px 0px 10px;
  height: 63px;
  align-items: ${(props) => props.vertically};
`;

const Image = styled.img`
  position: relative;
  top: 3px;
  width: ${(props) => props.width || 14}px;
  height: ${(props) => props.height || 14}px;
`;
export default function TaskItem({
  projectName,
  taskName,
  isBillable,
  id,
  handleDelete,
}) {
  return (
    <Container vertically="center">
      <div>
        <StyledText size={14}>{taskName}</StyledText>
        <StyledText size={12} color={"#4C4C4C"}>
          {isBillable && (
            <Image
              width={14}
              height={14}
              src={process.env.PUBLIC_URL + "/Vector.png"}
            />
          )}{" "}
          {projectName}
        </StyledText>
      </div>
      <Image
        onClick={() => handleDelete(id)}
        width={18}
        height={20.5}
        src={process.env.PUBLIC_URL + "/Shape.png"}
      />
    </Container>
  );
}
