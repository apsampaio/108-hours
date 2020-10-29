import { getDay, getDate, isAfter, format } from 'date-fns';
import { IAppointment } from '../hooks/Auth';

interface ISortedAppointments {
  day: Date;
  formatedDay: string;
  times: { time: Date; formattedTime: string }[];
}

interface ISortedAppointmentsWithID {
  day: Date;
  formatedDay: string;
  times: { time: Date; formattedTime: string; id: string }[];
}

const week_days = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export function groupByDay(
  unsortedAppointments: string[],
): ISortedAppointments[] {
  const appointments: ISortedAppointments[] = [];
  unsortedAppointments.forEach(appointment => {
    const formatedDay = `${week_days[getDay(new Date(appointment))]}, ${getDate(
      new Date(appointment),
    )}`;

    const dayFound = appointments.findIndex(
      appointmentToSearch => appointmentToSearch.formatedDay === formatedDay,
    );

    const formattedTime = format(new Date(appointment), 'HH:00');
    if (dayFound < 0) {
      appointments.push({
        day: new Date(appointment),
        formatedDay,
        times: [{ time: new Date(appointment), formattedTime }],
      });
    } else {
      appointments[dayFound].times.push({
        time: new Date(appointment),
        formattedTime,
      });
    }
  });

  const sortedAppointments = appointments.sort((a, b) =>
    isAfter(a.day, b.day) ? 1 : -1,
  );

  return sortedAppointments;
}

export function groupByDayWithId(
  unsortedAppointments: IAppointment[],
): ISortedAppointmentsWithID[] {
  const appointments: ISortedAppointmentsWithID[] = [];
  unsortedAppointments.forEach(appointment => {
    const formatedDay = `${week_days[getDay(new Date(appointment.date))]
      }, ${getDate(new Date(appointment.date))}`;

    const dayFound = appointments.findIndex(
      appointmentToSearch => appointmentToSearch.formatedDay === formatedDay,
    );

    const formattedTime = format(new Date(appointment.date), 'HH:00');
    if (dayFound < 0) {
      appointments.push({
        day: new Date(appointment.date),
        formatedDay,
        times: [
          {
            time: new Date(appointment.date),
            formattedTime,
            id: appointment.id,
          },
        ],
      });
    } else {
      appointments[dayFound].times.push({
        time: new Date(appointment.date),
        formattedTime,
        id: appointment.id,
      });
    }
  });

  // sort by days
  let sortedAppointments = appointments.sort((a, b) =>
    isAfter(a.day, b.day) ? 1 : -1,
  );

  // sort by hours inside each day
  sortedAppointments = sortedAppointments.map(day => ({
    ...day,
    times: day.times.sort((a, b) => (isAfter(a.time, b.time) ? 1 : -1)),
  }));

  return sortedAppointments;
}

export function formatTimes(unformattedTimes: IAppointment[]): string[] {
  return unformattedTimes.map(
    appointment =>
      `${week_days[getDay(new Date(appointment.date))]}, ${format(
        new Date(appointment.date),
        'dd/MM, HH:00',
      )}`,
  );
}
