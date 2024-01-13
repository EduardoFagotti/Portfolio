import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;

  @media (max-width: 630px) {
    padding-top: 30px;

    .cont-start-page {
      margin-right: -30px;

      @media (max-width: 440px) {
        width: 70%;

        section {
          width: 300px !important;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          .text {
            text-align: center;
          }

          .skils {
            @media (max-width: 430px) {
              width: 300px !important;
              gap: 5px;

              img {
                width: 38px;
                height: 38px;
              }
            }
          }
        }

        .about {
          width: 100% !important;
          margin-top: 40px;
        }
      }
    }
  }

  @media (min-width: 1200px) {
    .git {
      flex-direction: row !important;
    }
  }

  .cont-start-page {
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 1200px) {
      width: 1200px;
      flex-direction: row;
      justify-content: space-around;

      section {
        width: 420px !important;
        flex-direction: column;
        align-items: center;
        gap: 40px;
        .text {
          text-align: center;
        }
      }

      .about {
        margin-top: 0;
      }
    }

    section {
      width: 100%;
      height: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 80px;

      @media (max-width: 630px) {
        display: flex;
        flex-direction: column;
        gap: 50px;
        .text {
          align-items: center;
        }
        .skils {
          margin-top: 20px !important;

          @media (max-width: 380px) {
            width: 320px;
            gap: 5px;
          }
        }
      }
    }
  }

  .about {
    h1 {
      color: #00a0e0;
    }
    margin-top: 40px;
    width: 600px;
    text-align: justify;
    font-size: 22px;
    p {
      line-height: 28px;
    }

    @media (max-width: 630px) {
      width: 370px !important;
    }
    @media (max-width: 380px) {
      width: 320px !important;
    }
  }

  .git {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;

    img {
      width: 550px;
    }

    @media (max-width: 630px) {
      img {
        width: 370px;
      }
    }
    @media (max-width: 380px) {
      img {
        width: 320px;
      }
    }
  }

  .perfil {
    border-radius: 20px 20px 20px 20px;
  }

  .text {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .skils {
    background-color: #3c3c3c;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
