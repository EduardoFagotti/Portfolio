import { Container } from "./styled";

export default function Header() {
  return (
    <Container>
      <div className="cont-header">
        <button>home</button>
        <button>projects</button>
        <button>certifications</button>
        <button>contact</button>
      </div>
    </Container>
  );
}
