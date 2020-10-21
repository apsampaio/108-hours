import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Form } from '@unform/web';
import { useHistory } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';

import api, { statesApi } from '../../services/api';

import Input from '../../components/Input';
import Select from '../../components/Select';

import { useAuth } from '../../hooks/Auth';

import { Container, Banner, Content } from './styles';

interface ICountriesRequestInterface {
  translations: { br: string };
  alpha3Code: string;
}

interface IStatesInterface {
  label: string;
  value: string;
}

interface StatesRequestInterface {
  nome: string;
  id: string;
}

const SignUp: React.FC = () => {
  const { signIn } = useAuth();
  const history = useHistory();

  const [loading, setLoading] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);

  const [countries, setCountries] = useState<IStatesInterface[]>([]);
  const [selectedCountry, setSelectedCountry] = useState('');

  const [states, setStates] = useState<IStatesInterface[]>([]);
  const [selectedState, setSelectedState] = useState<number | null>(null);

  const [cities, setCities] = useState<IStatesInterface[]>([]);
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then(({ data }) => {
      const response = data.map(
        ({ translations, alpha3Code }: ICountriesRequestInterface) => {
          return {
            label: translations.br,
            value: alpha3Code,
          };
        },
      );

      setCountries(response);
    });
  }, []);

  useEffect(() => {
    statesApi.get('/').then(({ data }) => {
      const response = data.map(({ id, nome }: StatesRequestInterface) => ({
        value: id,
        label: nome,
      }));

      setStates(response);
    });
  }, []);

  useEffect(() => {
    statesApi.get(`/${selectedState}/municipios`).then(({ data }) => {
      const response = data.map(({ nome }: StatesRequestInterface) => ({
        label: nome,
        value: nome,
      }));

      setCities(response);
    });
  }, [selectedState]);

  const handleSelectCountry = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      const country = e.target.value;
      if (country !== 'BRA') {
        setSelectedState(null);
        setSelectedCity('');
      }
      setSelectedCountry(country);
    },
    [],
  );

  const handleSelectState = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(Number(e.target.value));
  }, []);

  const handleSelectCity = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(e.target.value);
  }, []);

  const handleSubmitForm = useCallback(
    ({ name, email, password, phone }) => {
      setLoading(true);
      const user = {
        name,
        email,
        password,
        phone,
        country: countries.find(country => country.value === selectedCountry)
          ?.label,
        state: states.find(state => {
          return Number(state.value) === selectedState;
        })?.label,
        city: selectedCity,
      };

      api
        .post('/users', user)
        .then(() => {
          signIn({ email, password });
        })
        .catch(({ response }) => {
          alert(response.data.error);
          // TODO better error handling
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [selectedCountry, selectedCity, selectedState, countries, signIn, states],
  );

  return (
    <Container>
      <Content>
        <FiArrowLeft
          onClick={() => {
            history.goBack();
          }}
          size={28}
          color="#CA53D7"
        />
        <div>
          <Form onSubmit={handleSubmitForm}>
            <h1>Cadastro</h1>
            <p>Preencha os dados abaixo para começar.</p>
            <Input name="name" placeholder="Nome" required />
            <Input
              name="email"
              placeholder="E-mail"
              required
              type="email"
              autoComplete="on"
            />
            <Input
              name="phone"
              placeholder="Telefone: (00) 98765 4321"
              required
              type="tel"
            />
            <Input
              name="password"
              placeholder="Senha"
              required
              type={passwordVisible ? 'text' : 'password'}
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

            <Select
              value={selectedCountry}
              label="Selecione um país"
              options={countries}
              name="country"
              onChange={handleSelectCountry}
              required
            />

            <Select
              value={selectedState || ''}
              disabled={selectedCountry !== 'BRA'}
              label="Selecione um estado"
              options={states}
              name="state"
              onChange={handleSelectState}
            />

            <Select
              value={selectedCity}
              disabled={!selectedState}
              label="Selecione uma cidade"
              options={cities}
              name="city"
              onChange={handleSelectCity}
            />

            <button type="submit">
              {loading ? 'Aguarde...' : 'Concluir cadastro'}
            </button>
          </Form>
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
