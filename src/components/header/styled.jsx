import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: #0a090b;
  display: flex;
  align-items: center;
  justify-content: center;

  .cont-header {
    width: 95%;
    display: flex;
    justify-content: space-around;

    @media (min-width: 850px) {
      width: 600px;
      justify-content: space-between;
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: #a7a7a7;
    font-size: 20px;
  }
  button:hover {
    cursor: pointer;
    color: #fff;
  }
`;
