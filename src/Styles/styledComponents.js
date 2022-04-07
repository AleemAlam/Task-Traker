import styled from "styled-components";

export const StyledInput = styled.input`
  background-color: #f4f4f4;
  width: 95%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 14px;
  font-weight: 400;
  outline: none;
  padding: 8px;
`;
export const StyledText = styled.p`
  display: block;
  margin: 0;
  font-size: ${(props) => props.size}px;
  line-height: 16px;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  margin-bottom: ${(props) => props.bottom || 0}px;
  margin-left: ${(props) => props.left || 0}px;
  color: ${(props) => props.color || "black"};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: ${(props) => props.right || 0}px;
  margin-top: ${(props) => props.top || 0}px;
  margin-bottom: ${(props) => props.bottom || 0}px;
  margin-left: ${(props) => props.left || 0}px;
`;

export const CheckContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledCheckBox = styled.input`
  position: relative;
  top: 5px;
`;

export const Title = styled.p`
  margin: 0px;
  font-size: 20px;
  line-height: 26px;
`;

export const StyledButton = styled.div`
  width: ${(props) => (props.width ? props.width + "px" : "100%")};
  background-color: ${(props) => props.bgColor || "white"};
  color: ${(props) => props.color || "black"};
  border: 1px solid #c6c6c6;
  border-color: ${(props) => props.borderColor || "#c6c6c6"};
  border-radius: 1px;
  outline: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  font-size: 14px;
  text-algin: left;
  padding: 8px 10px;
  margin: 5px;
`;
