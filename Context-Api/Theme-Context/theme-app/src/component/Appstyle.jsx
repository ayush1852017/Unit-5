import styled from "styled-components";

const AppStyle = styled.div`
  background: ${(props) => (props.theme === "light" ? "#fff" : "#000")};
  color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};
`;

export { AppStyle };
