import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isWithinInterval } from 'date-fns';

import { Link } from 'react-router-dom';
import { AxiosResponse } from 'axios';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import noScheduleImg from '../../assets/noSchedule.svg';

import { useAuth, IAppointment } from '../../hooks/Auth';

import { Container, Content, DayList, DayItem, Modal, EachDay } from './styles';
import { groupByDayWithId, formatTimes } from '../../util/appointmentsHelper';
import api from '../../services/api';
import { useSchedule } from '../../hooks/Schedule';

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [appointmentsToDelete, setAppointmentsToDelete] = useState<
    IAppointment[]
  >([]);
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

  const formattedAppointmentsToDelete = useMemo(() => {
    return formatTimes(appointmentsToDelete);
  }, [appointmentsToDelete]);

  const handleSelectAppointment = useCallback(
    (id: string) => {
      const foundAppointment = appointmentsToDelete.find(
        appointment => appointment.id === id,
      );

      if (!foundAppointment) {
        const appointmentToDelete = appointments.find(
          appointment => appointment.id === id,
        );
        if (appointmentToDelete) {
          setAppointmentsToDelete([
            ...appointmentsToDelete,
            appointmentToDelete,
          ]);
        }
      } else {
        setAppointmentsToDelete(
          appointmentsToDelete.filter(appointment => appointment.id !== id),
        );
      }
    },
    [appointments, appointmentsToDelete],
  );

  const handleDeleteAppointments = useCallback(() => {
    const promises: Promise<AxiosResponse>[] = [];
    appointmentsToDelete.forEach(appointment => {
      promises.push(api.delete(`/appointments/${appointment.id}`));
    });

    Promise.all(promises).then(() => {
      setModalVisibility(false);
      setAppointmentsToDelete([]);
      updateUserInfo();
    });
  }, [appointmentsToDelete, updateUserInfo]);

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
                  <EachDay
                    selected={
                      !!appointmentsToDelete.find(
                        appointment => appointment.id === id,
                      )
                    }
                    onClick={() => {
                      handleSelectAppointment(id);
                    }}
                    key={time.toString()}
                  >
                    {formattedTime}
                  </EachDay>
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
              {!appointmentsToDelete.length && (
                <p>Selecione um horário para excluir!</p>
              )}

              {!!appointmentsToDelete.length && (
                <p>Tem certeza que deseja excluir este(s) horário(s)?</p>
              )}

              {formattedAppointmentsToDelete.map(appointment => (
                <p>{appointment}</p>
              ))}
              <div>
                <button onClick={handleDeleteAppointments}>Excluir</button>
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
