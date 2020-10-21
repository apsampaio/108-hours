import React, { useCallback, useEffect, useState } from 'react';
import download from 'downloadjs';
import { format } from 'date-fns';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Table from '../../components/Table/index.jsx';
import api from '../../services/api';

import { Container, Content, Button } from './styles';

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  date: string;
}

interface ITableData {
  user_name: string;
  email: string;
  schedule_time: string;
}

// TODO Download data button to be added

const AdminShowPickedSchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<ITableData[]>([]);

  useEffect(() => {
    api.get<IResponse[]>('/appointments').then(({ data }) => {
      console.log(data);
      const parsedAppointments = data.map(appointment => ({
        user_name: appointment.user?.name,
        email: appointment.user?.email,
        schedule_time: format(new Date(appointment.date), 'dd/LL - HH:00'),
      }));

      setAppointments(parsedAppointments);
    });

    // const data = [
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Giusto Eley',
    //     email: 'geley0@dion.ne.jp',
    //     schedule_time: '7/4/2020',
    //   },
    //   {
    //     user_name: 'Flynn De Winton',
    //     email: 'fde1@wufoo.com',
    //     schedule_time: '12/18/2019',
    //   },
    //   {
    //     user_name: 'Sheryl Hauxwell',
    //     email: 'shauxwell2@people.com.cn',
    //     schedule_time: '10/8/2020',
    //   },
    //   {
    //     user_name: 'Buddie Gayne',
    //     email: 'bgayne3@artisteer.com',
    //     schedule_time: '7/21/2020',
    //   },
    //   {
    //     user_name: 'Indira Pickworth',
    //     email: 'ipickworth4@youtube.com',
    //     schedule_time: '2/4/2020',
    //   },
    //   {
    //     user_name: 'Indira Feander',
    //     email: 'ifeander5@nhs.uk',
    //     schedule_time: '5/13/2020',
    //   },
    //   {
    //     user_name: 'Eda Sidworth',
    //     email: 'esidworth6@google.ru',
    //     schedule_time: '3/28/2020',
    //   },
    //   {
    //     user_name: 'Stephie Whittington',
    //     email: 'swhittington7@cmu.edu',
    //     schedule_time: '5/4/2020',
    //   },
    //   {
    //     user_name: 'Guilbert Standen',
    //     email: 'gstanden8@cnn.com',
    //     schedule_time: '5/24/2020',
    //   },
    //   {
    //     user_name: 'Mollee Noen',
    //     email: 'mnoen9@angelfire.com',
    //     schedule_time: '11/8/2019',
    //   },
    //   {
    //     user_name: 'Glenine Le Teve',
    //     email: 'glea@jugem.jp',
    //     schedule_time: '6/18/2020',
    //   },
    //   {
    //     user_name: 'Christin Zaple',
    //     email: 'czapleb@amazon.de',
    //     schedule_time: '5/22/2020',
    //   },
    //   {
    //     user_name: 'Rachelle Lacroux',
    //     email: 'rlacrouxc@list-manage.com',
    //     schedule_time: '7/16/2020',
    //   },
    //   {
    //     user_name: 'Ailina Fink',
    //     email: 'afinkd@google.pl',
    //     schedule_time: '10/21/2019',
    //   },
    //   {
    //     user_name: 'Chris McGeechan',
    //     email: 'cmcgeechane@globo.com',
    //     schedule_time: '6/29/2020',
    //   },
    // ];

    // setAppointments(data);
  }, []);

  const handleDownloadTXT = useCallback(() => {
    api
      .get('report', { responseType: 'arraybuffer' })
      .then(response => {
        const blob = new Blob([response.data], {
          type:
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });

        download(blob, 'planilha de horários.xlsx');
      })
      .catch(() => {
        // TODO error handling
      });
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <strong>Tabela de horários preenchidos</strong>

        <Button onClick={handleDownloadTXT} name="Baixar tabela .txt" />
        <section>
          <Table data={appointments} />
        </section>
      </Content>
      <Footer />
    </Container>
  );
};

export default AdminShowPickedSchedules;
