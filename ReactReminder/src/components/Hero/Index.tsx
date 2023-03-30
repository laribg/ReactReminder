import { Container } from "./styles";
import heroImg from "../../assets/images/Hero.jpg";

export function Hero() {
    return <Container>
        <img src={heroImg} alt="" />
    </Container>;
}