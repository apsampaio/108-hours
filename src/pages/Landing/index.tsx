import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getYear, getDate, getMonth } from "date-fns";

import { Container, Content, Footer } from "./styles";

import landingImg from "../../assets/landing.svg";
import heartImg from "../../assets/heart.svg";

import api from "../../services/api";

const Landing: React.FC = () => {
  const [appointments, setAppointments] = useState(0)
  const [activePeriod, setActivePeriod] = useState({ start: new Date(), end: new Date() })

  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']


  const formatedActivePeriod = `${getDate(new Date(activePeriod.start))} a ${getDate(new Date(activePeriod.end))} de ${months[getMonth(new Date(activePeriod.start))]} de ${getYear(new Date(activePeriod.start))}`

  useEffect(() => {
    api.get('setup').then(({ data }) => {
      setAppointments(data.appointmentsSoFar)
      setActivePeriod(data.period)
    })
  }, [])

  return (
    <Container>
      <Content>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>{formatedActivePeriod}</p>
        </div>
        <img src={landingImg} alt="Meditação" />
      </Content>
      <Footer>
        <h2>Colabore com nossa jornada de cura !</h2>
        <p>Gratidão! Já temos um total de {appointments} orações agendadas.</p>
        <img src={heartImg} alt="Coração" />
        <Link to='/signin'>Agende um horário</Link>
        <Link to='/aboutus'>Saiba mais</Link>
      </Footer>
    </Container>
  );
};

export default Landing;
