import React, { useCallback, useState } from 'react';
import { isEqual } from 'date-fns';

import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';

import api from '../../services/api';

import {
  Container,
  SelectDate,
  SelectTime,
  Spacer,
  Button,
  Modal,
} from './styles';
import { useAuth } from '../../hooks/Auth';
import { useSchedule } from '../../hooks/Schedule';

interface ISelectedSchedule {
  day: Date;
  time: Date;
}

const AvailableSchedule: React.FC = () => {
  const { updateUserInfo } = useAuth();
  const history = useHistory();

  const { availableSchedule: availableTimes } = useSchedule();

  const [modalVisibility, setModalVisibility] = useState(false);
  const [scheduleItems, setScheduleItems] = useState<ISelectedSchedule[]>(
    () => {
      if (availableTimes) {
        return [
          { day: availableTimes[0].day, time: availableTimes[0].times[0].time },
        ];
      }
      return [];
    },
  );

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([
      ...scheduleItems,
      { day: availableTimes[0].day, time: availableTimes[0].times[0].time },
    ]);
  }, [scheduleItems, availableTimes]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          if (field === 'time') {
            return { ...scheduleItem, time: new Date(value) };
          }
          if (field === 'day') {
            return { time: new Date(value), [field]: new Date(value) };
          }
        }
        return scheduleItem;
      });

      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems],
  );

  const handleSubmitButton = useCallback(() => {
    const promises = scheduleItems.map(scheduleItem =>
      api.post('/appointments', {
        date: scheduleItem.time,
      }),
    );

    Promise.all(promises).then(() => {
      setModalVisibility(true);
      setTimeout(() => {
        setModalVisibility(false);
        history.push('/profile');
        updateUserInfo();
      }, 2000);
    });
  }, [history, scheduleItems, updateUserInfo]);

  return (
    <Container>
      <Header />

      <main>
        {modalVisibility && (
          <Modal>
            <span>
              <p>O seu agendamento foi realizado com sucesso!</p>
            </span>
          </Modal>
        )}

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
              isEqual(searchDay.day, scheduleItem.day),
            );

            const options = element
              ? element.times.map(e => ({
                label: e.formattedTime,
                value: e.time.toString(),
              }))
              : [{ label: '00:00', value: '' }];

            return (
              <li key={index}>
                <SelectDate
                  label="Dia da semana"
                  value={scheduleItems[index].day.toString()}
                  onChange={e => {
                    setScheduleItemValue(index, 'day', e.target.value);
                  }}
                  name="day"
                  options={availableTimes.map(day => ({
                    label: day.formatedDay,
                    value: day.day.toString(),
                  }))}
                />

                <SelectTime
                  label="Hora"
                  value={scheduleItem.time.toString()}
                  onChange={e => {
                    setScheduleItemValue(index, 'time', e.target.value);
                  }}
                  name="time"
                  options={options}
                // TODO estilizar o dropdown
                />
              </li>
            );
          })}
        </ul>

        <Spacer />

        <Button name="Marcar meus horários" onClick={handleSubmitButton} />
      </main>
    </Container>
  );
};

export default AvailableSchedule;
