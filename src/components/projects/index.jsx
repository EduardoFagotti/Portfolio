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

export default function Projects() {
  const dataProjects = [
    {
      img: Img5,
      name: "Clone Netflix",
      link: "teste",
    },
    {
      img: Img7,
      name: "Pokenext",
      link: "teste",
    },
    {
      img: Img1,
      name: "Mario jump",
      link: "teste",
    },
    {
      img: Img2,
      name: "Usuarios github",
      link: "teste",
    },
    {
      img: Img3,
      name: "Buscador de CEP",
      link: "teste",
    },
    {
      img: Img4,
      name: "Cauculadora de juros",
      link: "teste",
    },

    {
      img: Img6,
      name: "Contador regressivo",
      link: "teste",
    },
  ];

  return (
    <Container>
      <div className="cont-projects">
        <div className="title">Projects</div>
        <div className="cards">
          {dataProjects.map((item) => {
            const { img, name, link } = item;

            return (
              <div className="card">
                <Image src={img} width="" heigth="" alt="" />
                <div className="info">
                  <Link href={link}>{name}</Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
