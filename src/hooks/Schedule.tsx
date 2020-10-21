import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';
import { groupByDay } from '../util/appointmentsHelper';

interface IScheduleContextData {
  availableSchedule: IAvailableScheduleItem[];
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
  const [data, setData] = useState<IScheduleState>({} as IScheduleState);

  useEffect(() => {
    api.get('/appointments/available').then(response => {
      setData({
        ...data,
        availableSchedule: groupByDay(response.data.availableAppointments),
      });
    });
  }, [data]);

  return (
    <ScheduleContext.Provider
      value={{ availableSchedule: data.availableSchedule }}
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
