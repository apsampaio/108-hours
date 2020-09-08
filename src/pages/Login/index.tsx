import React, { useState, useCallback } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";

import { Container, Banner, Content, PasswordInputContainer } from "./styles";

const Login: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
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
          <input type="email" placeholder="E-mail" />
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
            <input type="checkbox" />
            Lembrar-me
          </label>
          <button>Entrar</button>
          <p>
            Não tem conta? <a href="/">Cadastre-se</a>
          </p>
        </form>
      </Content>
    </Container>
  );
};
export default Login;
