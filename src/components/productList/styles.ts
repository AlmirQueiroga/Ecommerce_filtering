import styled from "styled-components";


export const Container = styled.div`
  padding: 0;
  margin: 0 auto;
  display: grid;
  justify-content: space-around;
  max-width: 1290px;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 320px);
  list-style-type: none;

  @media (min-width: 768px) {
    padding: 20px;
    grid-template-columns: repeat(auto-fill, 430px);
  }
`;
