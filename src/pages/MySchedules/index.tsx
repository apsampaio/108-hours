import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

import noScheduleImg from '../../assets/noSchedule.svg';

import { useAuth, IAppointment } from '../../hooks/Auth';

import { Container, Content, DayList, DayItem, Modal } from './styles';
import { groupByDayWithId } from '../../util/appointmentsHelper';
import api from '../../services/api';

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [modalVisibility, setModalVisibility] = useState(false);
  const { user, updateUserInfo } = useAuth();

  const appointmentsByDay = useMemo(() => {
    return groupByDayWithId(appointments);
  }, [appointments]);

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
              <button onClick={handleClickDelete}>Excluir horário</button>
            </DayItem>
          ))}
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
