import React, { useCallback, useState } from 'react';
import { format } from 'date-fns'

import Header from '../../components/Header';

import { Container, SelectDate, SelectTime } from './styles';

const AvailableSchedule: React.FC = () => {
  const [day, setDay] = useState('')
  const [time, setTime] = useState('')
  const [scheduleItems, setScheduleItems] = useState([
    new Date()
  ]);

  const days = [
    { label: 'Terça-feira,13', value: '1' },
    { label: 'dia 2', value: '2' },
    { label: 'dia 3', value: '3' },
  ]

  const times = [
    { label: '12:00', value: '1' },
    { label: '13:00', value: '2' },
    { label: '15:00', value: '3' },
  ]

  const addNewScheduleItem = useCallback(() => { 
    setScheduleItems([...scheduleItems, new Date])
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
          <div />
        </header>

        <ul>
          {scheduleItems.map((scheduleItem, index) => (

            <li key={index}>

              <SelectDate label="Dia da semana" value={day} onChange={e => { setDay(e.target.value) }} name="day" options={days} />

              <SelectTime label="Hora" value={format(scheduleItem, 'MM:00')} onChange={e => { setTime(e.target.value) }} name="time" options={times} />

            </li>
          ))}
        </ul>

      </main>

    </Container>
  )
}

export default AvailableSchedule;