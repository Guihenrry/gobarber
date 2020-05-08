import styled from 'styled-components/native';

interface CreateAcountProps {
  keyboardShow: boolean;
}

export const Container = styled.View`
  padding: 0 30px;

  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #f4ede8;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const CreateAcountButton = styled.TouchableOpacity<CreateAcountProps>`
  position: ${(props) => (props.keyboardShow ? 'relative' : 'absolute')};
  display: ${(props) => (props.keyboardShow ? 'none' : 'flex')};
  left: 0;
  right: 0;
  bottom: 0;
  border-top-width: 1px;
  border-top-color: #232129;
  background: #312e38;
  padding: 16px 0;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAcountButtonText = styled.Text`
  color: #ff9000;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
