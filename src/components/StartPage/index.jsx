import Image from "next/image";
import html from "../../assets/icons/HTML.png";
import css from "../../assets/icons/CSS.png";
import js from "../../assets/icons/JS.png";
import git from "../../assets/icons/GITHUB.png";
import next from "../../assets/icons/NEXT.png";
import react from "../../assets/icons/REACT.png";
import { Container } from "./styled";

export default function StartPage() {
  const img = "https://avatars.githubusercontent.com/u/79821302?v=4";

  return (
    <Container id="home">
      <div className="cont-start-page">
        <section>
          <Image className="perfil" src={img} width="160" height="160" />
          <div className="text">
            <h1>Eduardo Fagotti dos Santos</h1>
            <h2>Front end Developer</h2>
            <div className="skils">
              <Image src={react} width="" heigth="" />
              <Image src={next} width="" heigth="" />
              <Image src={js} width="" heigth="" />
              <Image src={css} width="" heigth="" />
              <Image src={html} width="" heigth="" />
              <Image src={git} width="" heigth="" />
            </div>
          </div>
        </section>

        <div className="about">
          <h1>Sobre mim </h1>
          <p>
            Sou estudante do curso de Análise e Desenvolvimento de Sistemas
            oferecido pela Universidade Uniasselvi. Acredito que para uma boa
            formação, são necessários estudos externos ao âmbito universitário.
            <br />
            <br />
            Por tal motivo, realizei os seguintes cursos complementares:
            Algoritmo, HTML5, CSS3, JavaScript e React.Js. Ademais, iniciei os
            estudos em Next.Js. Portanto, a fim de me tornar um profissional
            extremamente competente, procuro me desenvolver profissionalmente
            cada dia mais. <br />
            <br /> Já trabalhei como assistente administrativo durante 01 (um)
            ano e 10 (dez) meses e no momento atuo como desenvolvedor Front-end
            web des de fevereiro de 2022.
          </p>
        </div>
      </div>
      {/* <div className="git">
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EduardoFagotti&layout=compact&langs_count=7&theme=algolia" />
        <img src="https://github-readme-stats.vercel.app/api?username=EduardoFagotti&show_icons=true&theme=algolia&include_all_commits=false&count_private=true" />
      </div> */}
    </Container>
  );
}
