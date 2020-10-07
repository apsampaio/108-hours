import { getDay, getDate } from "date-fns";

interface ISortedAppointments {
    day: Date;
    formatedDay: string;
    times: Date[];
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

        if (dayFound < 0) {
            appointments.push({ day: new Date(appointment), formatedDay, times: [new Date(appointment)] })
        } else {
            appointments[dayFound].times.push(new Date(appointment))

        }
    })


    return appointments
}