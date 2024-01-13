import { Container } from "./styled";
import Image from "next/image";
import Link from "next/link";
import img1 from "../../assets/images/certificados/ALGORITMO.PNG";
import img2 from "../../assets/images/certificados/Conecta.PNG";
import img3 from "../../assets/images/certificados/Coodesh-Reactjs.PNG";
import img4 from "../../assets/images/certificados/Fundamentar.PNG";
import img5 from "../../assets/images/certificados/HTML-CSS-M1.PNG";
import gif from "../../assets/images/certificados/gifs-de-estudo-1.gif";
import img0 from "../../assets/images/certificados/React-UTFPR.PNG";

export default function Certifications() {
  const dataCert = [
    {
      img: gif,
      name: "React Native",
      status: "em progresso",
      statusN: 1,
    },
    {
      img: gif,
      name: "Analise e desenvolvimento de sistemas ( SUPERIOR )",
      status: "em progresso",
      statusN: 1,
    },
    {
      img: img0,
      name: "Curso React.js UTFPR (UNIVERSIDADE TECNOLOGICA FEDERAL DO PARANA)",
      status: "Concluido",
    },
    {
      img: img1,
      name: "Algoritmo",
      status: "Concluido",
    },
    {
      img: img2,
      name: "Conectar",
      status: "Concluido",
    },
    {
      img: img3,
      name: "Teste de React.js",
      status: "Concluido",
    },
    {
      img: img4,
      name: "Fundamentar",
      status: "Concluido",
    },
    {
      img: img5,
      name: "HTML e CSS",
      status: "Concluido",
    },
  ];

  const colorProgress = (statusN) => {
    if (statusN === 1) {
      return "notDone";
    } else {
      return "done";
    }
  };

  return (
    <Container>
      <div id="certifications" className="cont-certifications">
        <div className="title">
          <h1>Certificações</h1>
        </div>
        <div className="cards">
          {dataCert.map((item) => {
            const { img, name, text, status, statusN } = item;
            const progressColor = colorProgress(statusN);

            return (
              <div className="card">
                <Image src={img} width="" heigth="" alt="" />
                <div className="info">
                  <p id="name">{name}</p>
                  <div>
                    <p>{text}</p>
                    <p className={progressColor}>{status}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
