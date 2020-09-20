import React, { useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

import { FiArrowRight, FiCalendar } from "react-icons/fi";

import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
import "./personalDateStyle.css";

const EventDate: React.FC = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

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
          <DatePicker
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
            inline
          />
          <DatePicker
            selected={endDate}
            onChange={(date: Date) => setEndDate(date)}
            inline
          />
        </section>
      </Content>
      <Footer />
    </Container>
  );
};

export default EventDate;
