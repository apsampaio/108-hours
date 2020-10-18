import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import noScheduleImg from '../../assets/noSchedule.svg';

import { useAuth, IAppointment } from '../../hooks/Auth';

import { Container, Content, DayList, DayItem } from './styles';

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const { user } = useAuth();

  useEffect(() => {
    setAppointments(user.appointments);
  }, [user]);

  if (!appointments) {
    return (
      <Container>
        <Header />
        <Content>
          <div>
            <strong>Meus Horários</strong>
            <Link to="/schedule">+ Novo horário</Link>
          </div>
          <img src={noScheduleImg} alt="Sem horários" />
          <h3>Ops! Parece que você ainda não agendou nenhum horario</h3>
          <p>Agende seu horário na aba de Horários</p>
        </Content>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <strong>Meus Horários</strong>
          <Link to="/schedule">+ Novo horário</Link>
        </div>

        <DayList>
          <DayItem>
            <label>Segunda-feira, 12</label>
            <span>
              <span>09:00</span>
              <span>10:00</span>
              <span>11:00</span>
            </span>
          </DayItem>
          <DayItem>
            <label>Terça-feira, 13</label>
            <span>
              <span>09:00</span>
              <span>10:00</span>
              <span>11:00</span>
              <span>12:00</span>
              <span>13:00</span>
              <span>14:00</span>
            </span>
          </DayItem>
          <DayItem>
            <label>Quarta-feira, 14</label>
            <span>
              <span>09:00</span>
              <span>10:00</span>
              <span>11:00</span>
              <span>12:00</span>
              <span>13:00</span>
              <span>14:00</span>
              <span>15:00</span>
              <span>16:00</span>
              <span>17:00</span>
            </span>
          </DayItem>
        </DayList>
      </Content>
      <Footer />
    </Container>
  );
};

export default MySchedules;
