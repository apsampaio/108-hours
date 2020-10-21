import React, { useCallback, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { HiCheck } from 'react-icons/hi';
import { FormHandles } from '@unform/core';

import { useAuth } from '../../hooks/Auth';

import Input from '../../components/Input';

import { Container, Banner, Content, Button } from './styles';
import { useSchedule } from '../../hooks/Schedule';

const Login: React.FC = () => {
  const { signIn } = useAuth();
  const { activePeriod } = useSchedule();

  const formRef = useRef<FormHandles>(null);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [remindme, setRemindme] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback(
    async ({ email, password }) => {
      try {
        setLoading(true);
        await signIn({ email, password });
      } catch (error) {
        // TODO error handling
      } finally {
        setLoading(false);
      }
    },
    [signIn],
  );
  return (
    <Container>
      <Banner>
        <div>
          <h1>108 horas orando com a Mãe Divina</h1>
          <p>{activePeriod.formatedActivePeriod}</p>
        </div>
      </Banner>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input placeholder="E-mail" name="email" />
          <Input
            name="password"
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Senha"
            icon={
              passwordVisible ? (
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
                )
            }
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
          <Button type="submit">{loading ? 'Carregando...' : 'Entrar'}</Button>
          <p>
            Não tem conta? <Link to="/signup">Cadastre-se</Link>
          </p>
        </Form>
      </Content>
    </Container>
  );
};
export default Login;
