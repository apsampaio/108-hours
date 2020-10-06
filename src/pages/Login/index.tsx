import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";

import Input from "../../components/Input";

import { Container, Banner, Content, PasswordInputContainer, Button } from "./styles";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remindme, setRemindme] = useState(false);

  return (
    <Container>
      <Banner>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>12 a 16 de Outubro de 2020</p>
        </div>
      </Banner>
      <Content>
        <form>
          <h1>Fazer login</h1>
          <Input placeholder="E-mail" name="email" />
          <PasswordInputContainer>
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Senha"
            />
            {passwordVisible ? (
              <FiEyeOff
                onClick={() => setPasswordVisible(!passwordVisible)}
                color="#9C98A6"
                size={24}
              />
            ) : (
                <FiEye
                  onClick={() => setPasswordVisible(!passwordVisible)}
                  color="#9C98A6"
                  size={24}
                />
              )}
          </PasswordInputContainer>
          <label>
            {remindme && <HiCheck size={24} color="#fff" />}
            <input
              checked={remindme}
              type="checkbox"
              onChange={() => setRemindme(!remindme)}
            />
            Lembrar-me
          </label>
          <Button to='/profile'>Entrar</Button>
          <p>
            Não tem conta? <Link to="/signup">Cadastre-se</Link>
          </p>
        </form>
      </Content>
    </Container>
  );
};
export default Login;
