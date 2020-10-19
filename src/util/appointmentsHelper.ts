import { getDay, getDate, isAfter, format } from "date-fns";

interface ISortedAppointments {
  day: Date;
  formatedDay: string;
  times: { time: Date, formattedTime: string }[];
}

const week_days = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado'
]

export function groupByDay(unsortedAppointments: string[]) {
  const appointments: ISortedAppointments[] = []
  unsortedAppointments.forEach((appointment) => {
    const formatedDay = `${week_days[getDay(new Date(appointment))]}, ${getDate(new Date(appointment))}`

    const dayFound = appointments.findIndex(appointmentToSearch => (
      appointmentToSearch.formatedDay === formatedDay
    ))

    const formattedTime = format(new Date(appointment), 'HH:00')
    if (dayFound < 0) {
      appointments.push({ day: new Date(appointment), formatedDay, times: [{ time: new Date(appointment), formattedTime }] })
    } else {
      appointments[dayFound].times.push({ time: new Date(appointment), formattedTime })

    }
  })

  const sortedAppointments = appointments.sort((a, b) => isAfter(a.day, b.day) ? 1 : -1)


  return sortedAppointments
}
