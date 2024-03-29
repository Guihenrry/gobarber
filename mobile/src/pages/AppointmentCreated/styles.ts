import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-size: 32px;
  color: #f4ede8;
  margin-top: 48px;
  font-family: 'RobotoSlab-Medium';
  text-align: center;
`;

export const Description = styled.Text`
  font-family: 'RobotoSlab-Regular';
  color: #999591;
  font-size: 16px;
  text-align: center;
  margin-top: 16px;
`;

export const OkButton = styled(RectButton)`
  background: #ff9000;
  border-radius: 10px;
  justify-content: center;
  padding: 12px 24px;
  margin-top: 24px;
`;

export const OkButtonText = styled.Text`
  font-family: 'RobotoSlab-Medium';
  color: #312e38;
  font-size: 16px;
`;
