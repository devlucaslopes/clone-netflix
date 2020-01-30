import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';

import Header from '../../components/Header';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextButton,
  ForgotPassword,
} from './styles';

export default function Login({navigation}) {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);

    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }

  return (
    <Container>
      <Header />
      <Form>
        <Input placeholder="E-mail" />
        <Input placeholder="Senha" />
        <SubmitButton onPress={handleLogin}>
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <TextButton>ENTRAR</TextButton>
          )}
        </SubmitButton>
        <ForgotPassword>Esqueci minha senha</ForgotPassword>
      </Form>
    </Container>
  );
}
