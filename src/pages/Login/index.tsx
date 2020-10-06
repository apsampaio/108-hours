import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Form } from "@unform/web";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiCheck } from "react-icons/hi";

import Input from "../../components/Input";

import { Container, Banner, Content, Button } from "./styles";
import { FormHandles } from "@unform/core";

const Login: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remindme, setRemindme] = useState(false);

  const handleSubmit = useCallback(({ email, password }) => {
   console.log('Authenticate!')
  }, [])




  return (
    <Container>
      <Banner>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>12 a 16 de Outubro de 2020</p>
        </div>
      </Banner>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input placeholder="E-mail" name="email" />
          <Input
            name='password'
            type={passwordVisible ? "text" : "password"}
            placeholder="Senha"
            icon={passwordVisible ? (
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
          />

          <label>
            {remindme && <HiCheck size={24} color="#fff" />}
            <input
              checked={remindme}
              type="checkbox"
              onChange={() => setRemindme(!remindme)}
            />
            Lembrar-me
          </label>
          <Button type='submit'>Entrar</Button>
          <p>
            Não tem conta? <Link to="/signup">Cadastre-se</Link>
          </p>
        </Form>
      </Content>
    </Container>
  );
};
export default Login;
