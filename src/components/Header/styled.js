import styled from "styled-components";

export const Div = styled.div`
  background-color: #f8f8f8;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  padding: 1em 0.5em;
`;

export const IrPokedex = styled.a`
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 0.2em;
    // text-decoration-color: red;
  }
`;
