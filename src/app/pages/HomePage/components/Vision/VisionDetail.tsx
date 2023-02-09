import { Button } from 'app/components/Button';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { messages } from './message';
import image from 'app/assets/logoFull.svg';
import { Link } from 'react-router-dom';
import './style.css';

const VisionDetail = () => {
  const { t } = useTranslation();

  return (
    <LefttWrap>
      <LogoWrap />
      <div>
        <Content>{t(messages.content1())}</Content>
      </div>
      <Link
        className="vision-button"
        to={'/about'}
        style={{ textDecoration: 'none', outline: 'none' }}
      >
        <Button className="alter">{t(messages.buttontitle())}</Button>
      </Link>
    </LefttWrap>
  );
};

export default VisionDetail;

const LefttWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 60%;
  padding-right: 20px;
  @media (max-width: 768px) {
    width: 100%;
    padding: 0 5%;
  }
`;

const Content = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: justify;
  margin: 7% 0;

  @media (max-width: 576px) {
    margin: 15% 0;
  }
`;

const LogoWrap = styled.div`
  background-image: url(${image});
  background-size: contain;
  background-repeat: no-repeat;
  width: 266px;
  height: 58px;
  @media (max-width: 768px) {
    align-self: center;
  }
`;
