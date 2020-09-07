import React from "react";

import { Container, Content, Footer } from "./styles";

import landingImg from "../../assets/landing.svg";
import heartImg from "../../assets/heart.svg";

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>12 a 16 de Outubro de 2020</p>
        </div>
        <img src={landingImg} alt="Meditação" />
      </Content>
      <Footer>
        <h2>Colabore com nossa jornada de cura !</h2>
        <p>Gratidão! Já temos um total de 50 orações agendadas.</p>
        <img src={heartImg} alt="Coração" />
        <button>Agende um horário</button>
        <button>Saiba mais</button>
      </Footer>
    </Container>
  );
};

export default Landing;
