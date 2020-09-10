import React from "react";

import { Container } from "./styles";

import { HiPhone } from "react-icons/hi";
import { AiFillYoutube, AiOutlineInstagram } from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

import logoImg from "../../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="logo" />
      <div>
        <strong>Contato:</strong>
        <p>
          <HiPhone color="#CA53D7" size={24} />
          +55 21 974.717.222
        </p>
        <p>
          <HiPhone color="#CA53D7" size={24} />
          +55 48 996.344.072
        </p>
        <p>
          <HiPhone color="#CA53D7" size={24} />
          +55 48 999.896.133
        </p>
      </div>
      <div>
        <a href="/">
          <AiFillYoutube color="#CA53D7" size={24} />
          Nosso canal do Youtube
        </a>
        <a href="/">
          <AiOutlineInstagram color="#CA53D7" size={24} />
          @amor.movimento
        </a>
        <a href="/">
          <SiFacebook color="#CA53D7" size={24} />
          https://www.facebook.com/AmorMov/
        </a>
      </div>
    </Container>
  );
};

export default Footer;
