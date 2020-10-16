import React, { useCallback, useState } from "react";
import { isBefore, isEqual, startOfDay } from "date-fns";
import { ptBR } from "date-fns/locale";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

import { FiArrowRight, FiCalendar } from "react-icons/fi";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./personalDateStyle.css";
import api from "../../services/api";

const EventDate: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleSubmit = useCallback(() => {
    api.post('/activeperiod', { start: startDate, end: endDate }).then((data) => {
      console.log(data)
    }).catch(({ response }) => {
      console.log(response.data.error)
    })
  }, [startDate, endDate])

  const handlePickStart = useCallback((date: Date) => {
    setStartDate(startOfDay(date))

    if (isBefore(startOfDay(endDate), startOfDay(date)) || isEqual(startOfDay(date), startOfDay(endDate))) {
      setEndDate(startOfDay(date))
    }

  }, [endDate])


  return (
    <Container>
      <Header />
      <Content>
        <strong>Escolha as datas do evento</strong>
        <span>
          <p>Data inicial</p>
          <FiArrowRight size={18} color="#4A2787" />
          <p>Data final</p>
          <FiCalendar size={18} color="#4A2787" />
        </span>
        <section>
          <form >
            <DatePicker
              selected={startDate}
              onChange={handlePickStart}
              inline
              minDate={new Date()}
              locale={ptBR}
              fixedHeight
            />
            <DatePicker
              selected={endDate}
              onChange={(date: Date) => setEndDate(startOfDay(date))}
              inline
              minDate={startDate}
              locale={ptBR}
              fixedHeight
            />

          </form>
          <button onClick={handleSubmit}>Ok</button>
        </section>
      </Content>
      <Footer />
    </Container>
  );
};

export default EventDate;
