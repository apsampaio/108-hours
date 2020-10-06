import React from "react";

import { Container, Menu, Dropdown } from "./styles";

import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <Link to='/schedule'>Horários</Link>
        <Link to='/aboutus'>Quem somos</Link>
      </Menu>
      <Dropdown>
        <div>
          <span>U</span>
          <p>
            Olá, <strong>Usuário</strong>
          </p>
          <FiChevronDown size={24} color="#4A2787" />
        </div>

        <div>
          <a>Meus horários</a>
          <a>Configuração de adm.</a>
          <a>Sair</a>
        </div>
      </Dropdown>
    </Container>
  );
};

export default Header;
