import React, { useState } from "react";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import Input from "../../components/Input";

import { Container, Banner, Content, PasswordInputContainer } from "./styles";

const SignUp: React.FC = () => {
  const history = useHistory()
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <Container>
      <Content>
        <div>
          <FiArrowLeft onClick={() => { history.goBack() }} size={28} color="#CA53D7" />

          <form>
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar.</p>
            <Input name='name' placeholder="Nome" />
            <Input name='email'placeholder="E-mail" />
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
            <button>Concluir cadastro</button>
          </form>
        </div>
      </Content>
      <Banner>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>12 a 16 de Outubro de 2020</p>
        </div>
      </Banner>
    </Container>
  );
};
export default SignUp;
