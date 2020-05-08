import React, { useEffect, useCallback, useState, useRef } from 'react';
import {
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  Alert,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationsErrors from '../../utils/getValidationsErrors';
import api from '../../services/api';
import logoImg from '../../assets/logo.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  BackToSignInButton,
  BackToSignInButtonText,
} from './styles';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const passwordInputRef = useRef<TextInput>(null);
  const emailInputRef = useRef<TextInput>(null);

  const navigation = useNavigation();
  const [keyboardShow, setKeyboardShow] = useState(false);

  const keyboardDidShow = useCallback(() => {
    setKeyboardShow(true);
  }, []);
  const keyboardDidHide = useCallback(() => {
    setKeyboardShow(false);
  }, []);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    return () => {
      Keyboard.removeListener('keyboardDidShow', keyboardDidShow);
      Keyboard.removeListener('keyboardDidHide', keyboardDidHide);
    };
  }, [keyboardDidShow, keyboardDidHide]);

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required(),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail valido'),
          password: Yup.string().required('Senha obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        Alert.alert(
          'Cadastro realizado com sucesso',
          'Você ja pode fazer o login na aplicaçãos',
        );

        navigation.navigate('SignIn');
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(error);
          formRef.current?.setErrors(errors);
        } else {
          Alert.alert(
            'Error no cadastro',
            'Verifique seus dados e tente novamente',
          );
        }
      }
    },
    [navigation],
  );

  return (
    <>
      <KeyboardAvoidingView
        enabled
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <Title>Crie sua conta</Title>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                autoCapitalize="words"
                name="name"
                icon="user"
                placeholder="Nome"
                returnKeyType="next"
                onSubmitEditing={() => {
                  emailInputRef.current?.focus();
                }}
              />
              <Input
                ref={emailInputRef}
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                autoCompleteType="off"
                name="email"
                icon="mail"
                placeholder="E-mail"
                returnKeyType="next"
                onSubmitEditing={() => {
                  passwordInputRef.current?.focus();
                }}
              />
              <Input
                ref={passwordInputRef}
                name="password"
                icon="lock"
                placeholder="Senha"
                secureTextEntry
                textContentType="newPassword"
                returnKeyType="send"
                onSubmitEditing={() => {
                  formRef.current?.submitForm();
                }}
              />
              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Cadastrar
              </Button>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignInButton
        keyboardShow={keyboardShow}
        onPress={() => navigation.navigate('SignIn')}
      >
        <Icon name="arrow-left" size={20} color="#F4EDE8" />
        <BackToSignInButtonText>Voltar para logon</BackToSignInButtonText>
      </BackToSignInButton>
    </>
  );
};

export default SignUp;
