import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isWithinInterval } from 'date-fns';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import noScheduleImg from '../../assets/noSchedule.svg';

import { useAuth, IAppointment } from '../../hooks/Auth';

import { Container, Content, DayList, DayItem, Modal } from './styles';
import { groupByDayWithId } from '../../util/appointmentsHelper';
import api from '../../services/api';
import { useSchedule } from '../../hooks/Schedule';

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);

  const { user, updateUserInfo } = useAuth();
  const { activePeriod } = useSchedule();

  const appointmentsByDay = useMemo(() => {
    const { start, end } = activePeriod;
    const filteredAppointments = appointments.filter(appointment =>
      isWithinInterval(new Date(appointment.date), { start, end }),
    );
    return groupByDayWithId(filteredAppointments);
  }, [activePeriod, appointments]);

  useEffect(() => {
    setAppointments(user.appointments);
  }, [user]);

  const handleDeleteAppointment = useCallback(
    (id: string) => {
      // api.delete(`/appointments/${id}`).then(() => {
      //   updateUserInfo()
      // })
    },
    [updateUserInfo],
  );

  const handleClickDelete = useCallback(() => {
    setModalVisibility(true);
  }, []);

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
            <DayItem key={formatedDay}>
              <label>{formatedDay}</label>
              <span>
                {times.map(({ formattedTime, time, id }) => (
                  <span
                    onClick={() => {
                      handleDeleteAppointment(id);
                    }}
                    key={time.toString()}
                  >
                    {formattedTime}
                  </span>
                ))}
              </span>
            </DayItem>
          ))}
          <button type="button" onClick={handleClickDelete}>
            Excluir horários
          </button>
        </DayList>

        {modalVisibility && (
          <Modal>
            <span>
              <p>Tem certeza que deseja excluir este horário?</p>
              <p>Segunda-feira, 13/10, 09:00</p>
              <div>
                <button onClick={() => setModalVisibility(false)}>
                  Excluir
                </button>
                <button onClick={() => setModalVisibility(false)}>
                  Cancelar
                </button>
              </div>
            </span>
          </Modal>
        )}
      </Content>
      <Footer />
    </Container>
  );
};

export default MySchedules;
