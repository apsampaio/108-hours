import React from "react";

import { Container, Menu, Dropdown } from "./styles";

import { FiChevronDown } from "react-icons/fi";

const Header: React.FC = () => {
  return (
    <Container>
      <Menu>
        <a>Horários</a>
        <a>Quem somos</a>
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
