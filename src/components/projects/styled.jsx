import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;

  align-items: center;
  justify-content: center;
  padding-top: 100px;

  .cont-projects {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 520px) {
      width: 95%;
    }

    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
      align-items: center;

      .card {
        img {
          width: 300px;
          height: 200px;
        }

        .info {
          width: 100%;
          height: 100px;
          border-radius: 10px;
          background-color: #565657;
          margin-top: -15px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
`;
