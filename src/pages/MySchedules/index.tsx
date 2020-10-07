import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import noScheduleImg from "../../assets/noSchedule.svg";

import { useAuth, IAppointment } from "../../hooks/Auth";

import { Container, Content, List, EachDay, EachTime, EachDayItems } from "./styles";

const MySchedules: React.FC = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([])
  const { user } = useAuth()

  useEffect(() => {
    setAppointments(user.appointments)
  }, [user])

  if (!appointments) {
    return (
      <Container>
        <Header />
        <Content>
          <div>
            <strong>Meus Horários</strong>
            <Link to='/schedule' >+ Novo horário</Link>
          </div>
          <img src={noScheduleImg} alt="Sem horários" />
          <h3>Ops! Parece que você ainda não agendou nenhum horario</h3>
          <p>Agende seu horário na aba de Horários</p>
        </Content>
        <Footer />
      </Container>
    );
  }

  return (
    <Container>
      <Header />
      <Content>
        <div>
          <strong>Meus Horários</strong>
          <Link to='/schedule' >+ Novo horário</Link>
        </div>

        <List>
          <EachDay>
            <label>
              Segunda-feira, 12
            </label>
            
            <EachDayItems>
              <EachTime>
                  09:00
              </EachTime>

              <EachTime>
                  10:00
              </EachTime>

              <EachTime>
                  11:00
              </EachTime>

            </EachDayItems>
          </EachDay>

        </List>

      </Content>
      <Footer />
    </Container>
  )


};

export default MySchedules;
