import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/Auth";

import { Container, Menu, Dropdown } from "./styles";


const Header: React.FC = () => {
  const { signOut, user } = useAuth()


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
            Olá, <strong>{user.name}</strong>
          </p>
          <FiChevronDown size={24} color="#4A2787" />
        </div>

        <div>
          <a>Meus horários</a>
          {user.isAdmin && (

          <a>Configuração de adm.</a>
          )}
          <a onClick={signOut}>Sair</a>
        </div>
      </Dropdown>
    </Container>
  );
};

export default Header;
