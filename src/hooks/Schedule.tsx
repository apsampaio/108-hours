import { getDate, getMonth, getYear } from 'date-fns';
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { groupByDay } from '../util/appointmentsHelper';

import socket from '../services/socket';

interface ActivePeriod {
  start: Date;
  end: Date;
  formatedActivePeriod: string;
}

interface IScheduleContextData {
  availableSchedule: IAvailableScheduleItem[];
  activePeriod: ActivePeriod;
}

export interface IAvailableScheduleItem {
  day: Date;
  formatedDay: string;
  times: { time: Date; formattedTime: string }[];
}

interface IScheduleState {
  availableSchedule: IAvailableScheduleItem[];
}

const ScheduleContext = createContext({} as IScheduleContextData);

const ScheduleProvider: React.FC = ({ children }) => {
  const months = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  const [data, setData] = useState<IScheduleState>({} as IScheduleState);
  const [activePeriod, setActivePeriod] = useState<ActivePeriod>({
    start: new Date(),
    end: new Date(),
    formatedActivePeriod: '',
  });

  useEffect(() => {
    api.get('/appointments/available').then(response => {
      console.log(response.data.availableAppointments);
      setData({
        availableSchedule: groupByDay(response.data.availableAppointments),
      });
    });
  }, []);

  useEffect(() => {
    api.get('setup').then(response => {
      const start = new Date(response.data.period.start);
      const end = new Date(response.data.period.end);

      const formatedActivePeriod = `${getDate(
        new Date(activePeriod.start),
      )} a ${getDate(end)} de ${months[getMonth(start)]} de ${getYear(start)}`;

      setActivePeriod({
        start,
        end,
        formatedActivePeriod,
      });
    });
  }, [activePeriod.start, months]);

  useEffect(() => {
    socket.on('newAppointments', (appointments: string[]) => {
      setData({
        availableSchedule: groupByDay(appointments),
      });
    });
  }, []);

  return (
    <ScheduleContext.Provider
      value={{ availableSchedule: data.availableSchedule, activePeriod }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};

function useSchedule(): IScheduleContextData {
  const context = useContext(ScheduleContext);

  if (!context) {
    throw new Error('useSchedule must be used within an AuthProvider');
  }

  return context;
}

export { ScheduleProvider, useSchedule };
