import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background: #352e2e;
`;

export const Form = styled.View`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 0px 32px 32px 32px;
`;

export const Input = styled.TextInput`
  height: 46px;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  font-size: 16px;
`;

export const SubmitButton = styled.TouchableOpacity`
  height: 46px;
  padding: 16px;
  margin-top: 16px;
  border-radius: 8px;
  background: #e80000;
`;

const CommomText = styled.Text`
  text-align: center;
  color: #fff;
`;

export const TextButton = styled(CommomText)``;

export const ForgotPassword = styled(CommomText)`
  margin-top: 16px;
`;
