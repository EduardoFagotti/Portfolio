import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #0a090b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  /* padding: 10px; */
  border-top: 10px solid #00a0e0;
  transition: transform 0.3s;

  .cont-header {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: space-around;
    align-items: center;
    justify-content: start;

    /* @media (min-width: 850px) {
      width: 600px;
      justify-content: space-between;
    } */
  }

  .cont-header:hover {
    /* animation-name: reverseButMenu;
    animation-duration: 2s;
    animation-fill-mode: forwards; */
    button {
      p {
        display: flex;
        animation: butMenu 2s;
      }
    }
  }

  @keyframes butMenu {
    0% {
      visibility: hidden;
      opacity: 0;
    }
    100% {
      visibility: visible;
      opacity: 1;
    }
  }

  button {
    width: 100%;
    border: none;
    padding: 5px;
    background-color: transparent;
    color: #a7a7a7;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;

    p {
      display: none;
    }
  }
  button:hover {
    cursor: pointer;
    background-color: #2b2b2b;
    border-radius: 10px;

    p {
      color: #00a0e0;
    }
  }

  #icon {
    width: 28px;
    height: 28px;
    color: #fff !important;
  }
`;
