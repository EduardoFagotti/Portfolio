import Link from "next/link";
import Image from "next/image";
import { Container } from "./styled";
import Img1 from "../../assets/imgProjects/mario.PNG";
import Img2 from "../../assets/imgProjects/Github-usuarios.PNG";
import Img3 from "../../assets/imgProjects/Cep.PNG";
import Img4 from "../../assets/imgProjects/calc.jpg";
import Img5 from "../../assets/imgProjects/NetflixClone.PNG";
import Img6 from "../../assets/imgProjects/contador.PNG";
import Img7 from "../../assets/imgProjects/pokedex.jpeg";
import Img8 from "../../assets/imgProjects/fteamSite.png";
import Img9 from "../../assets/imgProjects/gerador.PNG";

export default function Projects() {
  const dataProjects = [
    // {
    //   img: Img8,
    //   name: "Site Fteam",
    //   text: "Participei no desenvolvimendo do site da FTEAM, empresa voltada para o desenvolvimento de aplicativos Mobile. ",
    //   link: "teste",
    // },
    {
      img: Img9,
      name: "Gerador de senhas",
      text: "Aplicativo desenvolvido em React Native que consiste em gerar senhas aleatorias a partir da quantidade de caracteres.",
      link: "https://drive.google.com/drive/folders/1CQ-3XHDRFjh-iPmwlRP2YFdaGie9vm-F?usp=drive_link",
      type: "MOBILE",
    },
    {
      img: Img5,
      name: "Clone Netflix",
      text: "Neste projeto foi feito um clone da Netflix, utilizando uma API publica de capas de filmes e series.",
      link: "https://lnkd.in/dTsBGeTv",
      type: "WEB",
    },
    {
      img: Img7,
      name: "Pokenext",
      text: "Este projeto consiste em listar e mostrar informações sobre alguns pokemons, dentro de cada card é exibido as informações e ataque.",
      link: "https://lnkd.in/d_Mwt745",
      type: "WEB",
    },
    {
      img: Img1,
      name: "Mario jump",
      text: "Mini game do mario onde ele apenas pula os obstaculos, feito para estudos de JavaScript.",
      link: "https://dulcet-dasik-952425.netlify.app/",
      type: "WEB",
    },
    {
      img: Img2,
      name: "Usuarios github",
      text: "Projeto que consiste em efetuar a busca de usuarios do github, é listados os repositorios publicos do usuario.",
      link: "https://focused-goldwasser-7d64c1.netlify.app/",
      type: "WEB",
    },
    {
      img: Img3,
      name: "Buscador de CEP",
      text: "Buscador CEP, ao digitar algum CEP, é mostrado na tela o endereço correspondente.",
      link: "https://hopeful-wright-4b246f.netlify.app/",
      type: "WEB",
    },
    {
      img: Img4,
      name: "Cauculadora de juros",
      text: "Projeto estraido do guia definitivo de JavaScript, sua utilidade é fazer um calculo de juros e demonstrar em um grafico.",
      link: "https://calculadora-de-juros-anuais.netlify.app",
      type: "WEB",
    },
  ];

  return (
    <Container id="projects">
      <div className="cont-projects">
        <div className="title">
          <h1>Projetos</h1>
          <p>clique no nome do projeto para obter o link.</p>
        </div>
        <div className="cards">
          {dataProjects.map((item) => {
            const { img, name, text, link, type } = item;

            return (
              <div className="card">
                <Image src={img} width="" heigth="" alt="" />
                <div className="info">
                  <div className="title-card">
                    {" "}
                    <Link id="name" href={link} target="_blank">
                      {name}
                    </Link>
                    <p>{type}</p>
                  </div>
                  <div>
                    <p>{text}</p>
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
