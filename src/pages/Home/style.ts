import styled from "styled-components";

export const Container = styled.div`
  
  .filteringInputs {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  @media (min-width: 768px) {
    .filteringInputs {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;
export const TextInput = styled.div`
  display: flex;
  background-color: #000;
  border-radius: 10px;
  width: fit-content;
  align-items: center;
  margin-bottom: 15px;
  input {
    margin-right: 10px;
    justify-content: center;
    padding: 10px;
    border: none;
    border-radius: 10px 0 0 10px;
    :focus {
      outline: none;
    }
    svg {
      margin-right: 10px;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    height: 44px;
  }
`;


export const Button = styled.button`
  :focus {
    outline: none;
  }
  @media (min-width: 768px){
    margin-top: 20px;
    margin-right: 20px;
  }
  @media (max-width: 768px) {
    margin: 10px 5px;
    font-size: 12px;
  }
`;

