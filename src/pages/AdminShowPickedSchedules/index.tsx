import React, { useEffect,  useState } from 'react';
import { format } from "date-fns";

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Table from '../../components/Table/index.jsx';
import api from '../../services/api';

import { Container, Content } from './styles';

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    date: string

}

interface ITableData {
    user_name: string
    email: string
    schedule_time: string
}

//TODO Download data button to be added

const AdminShowPickedSchedules: React.FC = () => {
    const [appointments, setAppointments] = useState<ITableData[]>([])
    useEffect(() => {
        api.get<IResponse[]>('/appointments').then(({ data }) => {
            console.log(data)
            const parsedAppointments = data.map(appointment => ({
                user_name: appointment.user?.name,
                email: appointment.user?.email,
                schedule_time: format(new Date(appointment.date), 'dd/LL - HH:00'),
            }))

            setAppointments(parsedAppointments)
        })
    }, [])
    return <Container>
        <Header />
        <Content>
            <strong>Tabela de horários preenchidos</strong>
           
            <section>
                <Table data={appointments} />
            </section>
        </Content>
        <Footer />
    </Container>;
}

export default AdminShowPickedSchedules;