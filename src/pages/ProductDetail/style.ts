import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 768px) {
        h1{
            font-size: 30px;
        }
        h2{
            font-size: 25px;
        }
        margin-top: 40px;
        font-size: 15px;
    }
    @media (max-width: 768px) {
        h1{
            font-size: 20px;
        }
        h2{
            font-size: 16px;
        }
        margin: 10px 5px;
        font-size: 12px;
  }
`;

export const Image = styled.img`
    background-color: white;
    @media (min-width: 768px) {
        max-width: 980px;
        max-height: 400px;
    }
    @media (max-width: 768px) {
        max-width: 100%;
        max-height: auto;
  }
`;