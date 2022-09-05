import styled from "styled-components";

export const Container = styled.li`
  background: #ffffff;
  margin: 15px;
  display: flex;
  flex-direction: column;
  width: 290px;
  box-sizing: border-box;
  border-radius: 10px;
  justify-content: space-between;
  padding: 10px;
  h3 {
    text-align: center;
    color: #282f44;
    font-size: 16px;
  }
  @media (min-width: 768px) {
    width: 400px;
    h3 {
      font-size: 18px;
    }
  }

  transition: 0.3s;

    :hover {
      transform: scale3d(1.1, 1.1, 1);
    }
`;
