import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../services/api';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';
import getValidationsErrors from '../../utils/getValidationsErrors';
import { Container, Content, Background, SignWrapper } from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatorio'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', data);

        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você ja pode fazer seu login no GoBarber.',
        });
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(error);
          formRef.current?.setErrors(errors);
        } else {
          addToast({
            type: 'error',
            title: 'Error no cadastro!',
            description: 'Verifique seus dados e tente novamente.',
          });
        }
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Background />

      <SignWrapper>
        <Content>
          <img src={logoImg} alt="GoBarber" />

          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Faça seu cadastro</h1>

            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon
          </Link>
        </Content>
      </SignWrapper>
    </Container>
  );
};

export default SignUp;
