import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const animateScale = keyframes`
  from {
    opacity: 0;
    transform: scale(.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px;
  background: #28262e;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;

  > img {
    height: 80px;

    @media screen and (max-width: 560px) {
      height: 60px;
    }
  }

  > button {
    margin-left: auto;
    background: transparent;
    border: none;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 560px) {
      margin-left: 24px;
    }

    svg {
      color: #999591;
      width: 20px;
      height: 20px;
    }
  }
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  margin-left: 80px;
  transition: opacity 0.3s;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 560px) {
    margin-left: auto;
  }

  > img {
    width: 56px;
    height: 56px;
    border-radius: 50%;

    @media screen and (max-width: 560px) {
      width: 48px;
      height: 48px;
    }
  }

  > div {
    margin-left: 16px;

    display: flex;
    flex-direction: column;

    @media screen and (max-width: 560px) {
      display: none;
    }

    span {
      color: #f4ede8;
    }

    strong {
      color: #ff9000;
    }
  }
`;

export const Content = styled.main`
  max-width: 1184px;
  padding: 64px 32px;
  margin: 0 auto;
  animation: ${appearFromBottom} 1s;

  display: flex;

  @media screen and (max-width: 860px) {
    flex-direction: column;
  }

  @media screen and (max-width: 460px) {
    padding: 0px;
  }
`;

export const Schedule = styled.section`
  margin-right: 120px;

  flex: 1;

  @media screen and (max-width: 980px) {
    margin-right: 32px;
  }

  @media screen and (max-width: 860px) {
    margin-right: 0;
    order: 2;
  }

  @media screen and (max-width: 460px) {
    padding: 0 16px 64px 16px;
  }

  h1 {
    font-size: 36px;
  }

  p {
    margin-top: 8px;
    color: #ff9000;

    span + span::before {
      content: ' | ';
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: #999591;
    font-size: 20px;
    font-weight: 400;
  }

  div {
    animation: ${fadeBottom} 1s;
    background: #3e3b47;
    display: flex;
    align-items: center;
    padding: 16px 24px;
    border-radius: 10px;
    margin-top: 24px;
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      height: 80%;
      width: 2px;
      left: 0;
      background: #ff9000;
      border-radius: 0px 10px 10px 0px;
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;

      @media screen and (max-width: 460px) {
        width: 48px;
        height: 48px;
      }
    }

    strong {
      margin-left: 24px;
      color: #f4ede8;
      font-size: 24px;
      line-height: 32px;

      @media screen and (max-width: 460px) {
        font-size: 16px;
      }
    }

    time {
      margin-left: auto;
      color: #999591;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #ff9000;
        width: 24px;
        height: 24px;
        margin-right: 8px;
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;
    color: #999591;
    font-size: 20px;
    line-height: 26px;
    border-bottom: 1px solid #3e3b47;
    padding-bottom: 16px;
    margin-bottom: 16px;
  }

  > p {
    color: #999591;
    animation: ${fadeBottom} 0.6s;
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  animation: ${animateScale} 1s;

  @media screen and (max-width: 460px) {
    flex-direction: column;
    background: #3e3b47;
    align-items: flex-start;
    padding: 16px;
    border-radius: 10px;
  }

  & + div {
    margin-top: 16px;
  }

  time {
    width: 70px;
    color: #f4ede8;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: #ff9000;
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
  }

  div {
    flex: 1;
    background: #3e3b47;
    padding: 16px;
    border-radius: 10px;
    margin-left: 24px;

    display: flex;
    align-items: center;

    @media screen and (max-width: 460px) {
      margin-left: 0px;
      padding: 0px;
      margin-top: 16px;
    }

    img {
      width: 56px;
      height: 56px;
      border-radius: 50%;
    }

    > strong {
      margin-left: 16px;
      color: #f4ede8;
      font-size: 20px;

      @media screen and (max-width: 460px) {
        font-size: 16px;
      }
    }
  }
`;

export const Calendar = styled.aside`
  width: 360px;

  @media screen and (max-width: 980px) {
    width: 320px;
  }

  @media screen and (max-width: 860px) {
    order: 1;
    margin-bottom: 64px;
  }

  @media screen and (max-width: 460px) {
    width: 100%;
  }

  .DayPicker {
    background: #28262e;
    border-radius: 10px;

    @media screen and (max-width: 460px) {
      border-radius: 0;
      background: #28262e;
    }
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 16px;
  }

  .DayPicker-Day {
    width: 40px;
    height: 40px;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 10px;
    color: #fff;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
  }

  .DayPicker-Day--disabled {
    color: #666360 !important;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 10px;
    color: #232129 !important;
  }
`;
