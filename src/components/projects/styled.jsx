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
    gap: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 520px) {
      width: 95%;
    }

    .title {
      padding: 20px;
      font-size: 22px;

      h1 {
        color: #00a0e0;
      }
    }

    .cards {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      justify-content: center;
      align-items: center;
      transition: transform 0.3s;

      .card {
        -webkit-box-shadow: 0px 0px 12px 7px rgba(0, 0, 0, 0.84);
        box-shadow: 0px 0px 12px 7px rgba(0, 0, 0, 0.84);
        border-radius: 10px;
        img {
          width: 300px;
          height: 200px;
        }

        .info {
          width: 100%;
          height: 150px;
          display: flex;
          flex-direction: column;
          border-radius: 10px;
          background-color: #313131;
          margin-top: -15px;
          gap: 10px;
          display: flex;
          align-items: center;
          justify-content: center;

          p {
            width: 250px;
            text-align: justify;
          }
        }
      }

      .card:hover {
        cursor: pointer;
        transform: scale(1.1);
      }
    }
  }

  #name {
    color: #00a0e0;
    text-decoration: none;
  }
`;
