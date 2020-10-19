import React, { useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import noScheduleImg from '../../assets/noSchedule.svg';

import { useAuth, IAppointment } from '../../hooks/Auth';

import { Container, Content, DayList, DayItem } from './styles';
import { groupByDay } from '../../util/appointmentsHelper';

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const { user } = useAuth();

  const appointmentsByDay = useMemo(() => {
    return groupByDay(appointments.map(appointments => appointments.date))
  }, [appointments])

  useEffect(() => {
    setAppointments(user.appointments);
  }, [user]);

  if (!appointments.length) {
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

          {appointmentsByDay.map(({ formatedDay, times }) => (
            <DayItem key={formatedDay} >
              <label >{formatedDay}</label>
              <span>
                {times.map(({ formattedTime, time }) => (
                  <span key={time.toString()} >{formattedTime}</span>
                ))}
              </span>
            </DayItem>
          ))}
        </DayList>
      </Content>
      <Footer />
    </Container>
  );
};

export default MySchedules;
