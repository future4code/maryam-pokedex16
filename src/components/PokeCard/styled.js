import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  width: 200px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const PokeImage = styled.img``;

export const PokeName = styled.p`
  margin: 10px 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 10px;
  width: 180px;
`;

export const BtnPokedex = styled.button`
  margin: 0;
  &:hover {
    text-decoration-thickness: 0.2em;
  }
`;

export const BtnDetails = styled.button`
  cursor: pointer;

  &:hover {
     text-decoration-thickness: 0.2em;
  }
`;
