import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { Container, Content } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <section>
          <p>
            108 horas Orando com a Mãe Divina é um movimento coletivo e
            ecumênico de pessoas orando junto à Mãe Divina unidas no objetivo de
            elevar e expandir o Amor Fraternal no planeta.
          </p>
          <p>
            É uma jornada de 4 dias e meio de orações contínuas que visam nutrir
            o coração da humanidade de amor incondicional.
          </p>
          <p>
            Estamos nos preparando para a Quarta Jornada, que acontecerá dos
            dias <span>12</span> à <span>16</span> de <span>Outubro</span> de{" "}
            <span>2020</span>.
          </p>
          <p>
            Qualquer pessoa, independente de idade, gênero, raça, religião ou
            nacionalidade, pode escolher um horário que ainda esteja vago e nele
            fazer orações da forma que quiser: orações formais, espontâneas,
            cantos, mantras, meditações, sintonizações, danças, música, tocar um
            instrumento, etc. seja o que escolher, o importante é que brote do
            seu coração.
          </p>
          <p>
            Estas foram as Jornadas de 108 Horas de Oração até hoje: A primeira
            jornada aconteceu de 7 a 11 de Setembro de 2019 A segunda jornada
            aconteceu de 8 a 12 de Dezembro de 2019 A terceira jornada,
            aconteceu de 8 a 12 de Abril de 2020.
          </p>
          <p>
            Participe do nosso Canal no Telegram:{" "}
            <a href="http://t.me/Orando108Horas">Orando 108 Horas Telegram</a>
          </p>
          <p>Gratidão e seguimos em união à Mãe Divina</p>
        </section>
      </Content>
      <Footer />
    </Container>
  );
};

export default Home;
