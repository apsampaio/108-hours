import React, { useCallback, useEffect, useState } from 'react';
import { format, isEqual } from 'date-fns'

import Header from '../../components/Header';

import { groupByDay } from '../../util/appointmentsHelper';

import api from '../../services/api';

import { Container, SelectDate, SelectTime, Spacer, Button } from './styles';

interface IAvailableTimes {
  day: Date;
  formatedDay: string;
  times: Date[];
}

interface ISelectedSchedule {
  day: Date;
  time: Date;
}

const AvailableSchedule: React.FC = () => {
  const [availableTimes, setAvailableTimes] = useState<IAvailableTimes[]>([])
  const [scheduleItems, setScheduleItems] = useState<ISelectedSchedule[]>([]);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { day: availableTimes[0].day, time: availableTimes[0].times[0] }])
  }, [scheduleItems, availableTimes])

  useEffect(() => {
    api.get('/appointments/available').then((response) => {
      setAvailableTimes(groupByDay(response.data.availableAppointments))

    })
  }, [])


  const setScheduleItemValue = useCallback((
    position: number,
    field: string,
    value: string) => {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        if (field === 'time') {
          return { ...scheduleItem, ['time']: new Date(value) };
        }
        else if (field === 'day') {

          return { ['time']: new Date(value), [field]: new Date(value) };
        }
      }
      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }, [scheduleItems])

  const handleSubmitButton = useCallback(() => {
    const promises = scheduleItems.map(scheduleItem => (api.post('/appointments', {
      date: scheduleItem.time
    })))

    Promise.all(promises).then((data) => {
      console.log(data)
    })
    console.log(scheduleItems)

  }, [scheduleItems])

  return (
    <Container>
      <Header />

      <main>
        <header>

          <div>
            <span>Horários disponíveis</span>
            <span onClick={addNewScheduleItem}>+ Novo horário</span>
          </div>

          <Spacer />

        </header>

        <ul>
          {scheduleItems.map((scheduleItem, index) => {
            const element = availableTimes.find(searchDay =>
              isEqual(searchDay.day, scheduleItem.day))

            const options = element ? element.times.map(e => ({ label: `${format(e, 'HH')}:00`, value: e.toString() })) : [{ label: '00:00', value: '' }]

            return (

              <li key={index}>

                <SelectDate
                  label="Dia da semana"
                  value={scheduleItems[index].day.toString()}
                  onChange={e => { setScheduleItemValue(index, 'day', e.target.value) }}
                  name="day"
                  options={availableTimes.map(day => (
                    { label: day.formatedDay, value: day.day.toString() }
                  ))} />

                <SelectTime
                  label="Hora"
                  value={scheduleItem.time.toString()}
                  onChange={e => {
                    setScheduleItemValue(index, 'time', e.target.value)
                  }}
                  name="time"
                  options={
                    options
                  }
                //TODO estilizar o dropdown
                />

              </li>
            )
          })}
        </ul>

        <Spacer />

        <Button name="Marcar meus horários" onClick={handleSubmitButton} />


      </main>

    </Container>
  )
}

export default AvailableSchedule;