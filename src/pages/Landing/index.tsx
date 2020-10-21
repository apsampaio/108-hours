import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Content, Footer } from './styles';

import landingImg from '../../assets/landing.svg';
import heartImg from '../../assets/heart.svg';

import api from '../../services/api';
import { useSchedule } from '../../hooks/Schedule';

const Landing: React.FC = () => {
  const [appointments, setAppointments] = useState(0);
  const { activePeriod } = useSchedule();

  useEffect(() => {
    api.get('setup').then(({ data }) => {
      setAppointments(data.appointmentsSoFar);
    });
  }, []);

  return (
    <Container>
      <Content>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>{activePeriod.formatedActivePeriod}</p>
        </div>
        <img src={landingImg} alt="Meditação" />
      </Content>
      <Footer>
        <h2>Colabore com nossa jornada de cura !</h2>
        <p>Gratidão! Já temos um total de {appointments} orações agendadas.</p>
        <img src={heartImg} alt="Coração" />
        <Link to="/signin">Agende um horário</Link>
        <Link to="/aboutus">Saiba mais</Link>
      </Footer>
    </Container>
  );
};

export default Landing;
