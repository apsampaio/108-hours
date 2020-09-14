import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

import noScheduleImg from "../../assets/noSchedule.svg";

const MySchedules: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <div>
          <strong>Meus Horários</strong>
          <a>+ Novo horário</a>
        </div>
        <img src={noScheduleImg} alt="Sem horários" />
        <h3>Ops! Parece que você ainda não agendou nenhum horario</h3>
        <p>Agende seu horário na aba de Horários</p>
      </Content>
      <Footer />
    </Container>
  );
};

export default MySchedules;
