import { Container } from "./styled";
import { AiFillHome } from "react-icons/ai";
import { PiCardsFill } from "react-icons/pi";

import { PiCertificateFill } from "react-icons/pi";
import { BiSolidMessageDetail } from "react-icons/bi";

import { scroller } from "react-scroll/modules";

export default function Header() {
  const scrollTo = (to) => {
    scroller.scrollTo(to, {
      duration: 1000,
      smooth: "easeInOutQuad",
      ignoreCancelEvents: true,
    });
  };

  return (
    <Container id="menu">
      <div className="cont-header">
        <button onClick={() => scrollTo("home")}>
          <AiFillHome id="icon" /> <p>HOME</p>
        </button>
        <button onClick={() => scrollTo("projects")}>
          <PiCardsFill id="icon" />
          <p>PROJECTS</p>
        </button>
        <button onClick={() => scrollTo("certifications")}>
          <PiCertificateFill id="icon" />
          <p>CERTIFICATIOS</p>
        </button>
        <button>
          <BiSolidMessageDetail id="icon" />
          <p>CONTACT</p>
        </button>
      </div>
    </Container>
  );
}
