import styled from 'styled-components';
import { shade } from 'polished';

import signInBackgroundImg from '../../assets/sign-in-background.png';

export const Container = styled.div`
  min-height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const SignWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  padding: 30px 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  height: 100%;
  max-height: 620px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  form {
    width: 100%;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;

      @media (max-width: 768px) {
        font-size: 1.25rem;
      }
    }

    button {
      margin-top: 16px;
    }

    a {
      color: #f4ede8;
      text-decoration: none;
      display: block;
      margin-top: 24px;
      transition: color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  > a {
    color: #ff9000;
    text-decoration: none;
    display: block;
    margin-top: 24px;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;

  flex: 1;

  @media (max-width: 768px) {
    display: none;
  }
`;
