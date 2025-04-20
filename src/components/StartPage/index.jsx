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
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EduardoFagotti&layout=compact&langs_count=7&theme=algolia" />
          </div>
        </section>

        <div className="about">
          <h1>Sobre mim </h1>
          <p>
          Sou um desenvolvedor Front-end e Mobile com experiência profissional desde 2022, especializado em criar interfaces modernas e responsivas utilizando tecnologias como Next.js, React Native, TypeScript, JavaScript, styled-components, HTML, CSS

            <br />
            <br />
            Ao longo da minha carreira, tive a oportunidade de atuar como Desenvolvedor Front-end na Design House, uma empresa de marketing em Maringá, PR, onde contribuí em projetos por 7 meses. <br />
            <br /> Também atuei como Desenvolvedor Front-end na Log Sistemas, onde colaborei no desenvolvimento de um aplicativo para a Kero Ótica, uma solução que ajudou a otimizar processos internos e melhorar a experiência do usuário. Nesse projeto, utilizei React Native e TypeScript para criar uma aplicação mobile eficiente e escalável, trabalhando em equipe para entregar resultados dentro do prazo. <br />
            <br />
            Minhas principais habilidades incluem: <br />

Desenvolvimento de aplicações web e mobile com React.js e React Native. <br />

Criação de interfaces responsivas e dinâmicas com styled-components, CSS e HTML. <br />

Utilização de TypeScript para garantir código mais seguro e escalável. <br />

Versionamento de código com Git/GitHub para colaboração eficiente em equipe. <br />
          </p>
        </div>
      </div>
      <div className="git">
        {/* <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=EduardoFagotti&layout=compact&langs_count=7&theme=algolia" /> */}
        {/* <img src="https://github-readme-stats.vercel.app/api?username=EduardoFagotti&show_icons=true&theme=algolia&include_all_commits=false&count_private=true" /> */}
      </div>
    </Container>
  );
}
