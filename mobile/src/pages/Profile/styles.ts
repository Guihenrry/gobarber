import styled from 'styled-components/native';

interface BackToSignInProps {
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
  font-size: 20px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  margin: 24px 0;
  align-self: flex-start;
`;

interface BackButtonProps {
  keyboardShow: boolean;
}

export const BackButton = styled.TouchableOpacity<BackButtonProps>`
  align-self: flex-start;
  position: absolute;

  top: ${(props) => (props.keyboardShow ? '-46px' : '46px')};
  left: 24px;
`;

interface UserAvatarProps {
  keyboardShow: boolean;
}

export const UserAvatarButton = styled.TouchableOpacity<UserAvatarProps>`
  display: ${(props) => (props.keyboardShow ? 'none' : 'flex')};
`;

export const UserAvatar = styled.Image`
  width: 186px;
  height: 186px;
  border-radius: 98px;
`;
