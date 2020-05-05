import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, SignWrapper } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <SignWrapper>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <form>
          <h1>Faça seu logon</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Entar</Button>

          <a href="aw">Esqueci minha senha</a>
        </form>

        <a href="sda">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
    </SignWrapper>

    <Background />
  </Container>
);

export default SignIn;
