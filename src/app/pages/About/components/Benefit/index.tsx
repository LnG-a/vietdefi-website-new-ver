import React from 'react';
import styled from 'styled-components';
import benefit from './assets/benefit.png';
import { useTranslation as UseTranslation } from 'react-i18next';
import { messageBenefit } from '../../message';

interface Image {
  image: any;
}

export default function index() {
  const { t } = UseTranslation();
  return (
    <ContainerBenefit>
      <BoxLeft>
        <H1>{t(messageBenefit.about_benefitTitle())}</H1>
        <BoxChildLeft>
          <H3>{t(messageBenefit.about_benefit_box1_title())}</H3>
          <P>{t(messageBenefit.about_benefit_box1_description())}</P>
        </BoxChildLeft>
        <BoxChildLeft>
          <H3>{t(messageBenefit.about_benefit_box2_title())}</H3>
          <P>{t(messageBenefit.about_benefit_box2_description())}</P>
        </BoxChildLeft>
        <BoxChildLeft>
          <H3>{t(messageBenefit.about_benefit_box3_title())}</H3>
          <P>{t(messageBenefit.about_benefit_box3_description())}</P>
        </BoxChildLeft>
      </BoxLeft>
      <BoxRight image={benefit}></BoxRight>
    </ContainerBenefit>
  );
}

const ContainerBenefit = styled.div`
  width: 1180px;
  margin: 120px 130px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 768px) and (max-width: 1024px) {
    width: 1376px;
    margin: 80px 32px 80px;
  }
  @media screen and (max-width: 767px) {
    width: 1380px;
    margin: 40px 30px 40px;
    flex-direction: column-reverse;
  }
`;
const BoxLeft = styled.div`
  max-width: 50%;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
const BoxRight = styled.div<Image>`
  /* max-width: 50%;
  height: 370px; */
  width: 50%;
  height: 375.31px;
  background: url(${props => props.image}) no-repeat;
  background-size: contain;
  background-position-y: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 222.16px;
    background-position-x: center;
  }
`;
const H1 = styled.h1`
  max-width: 395px;
  font-weight: 700;
  font-size: 39px;
  color: #00baff;
  margin-bottom: 40px;
  @media screen and (max-width: 767px) {
    width: 100%;
    font-size: 24px;
    max-width: 100%;
    padding-top: 34px;
    margin-bottom: 20px;
  }
`;
const BoxChildLeft = styled.div`
  max-width: 467px;
  @media screen and (max-width: 767px) {
    max-width: 100%;
  }
`;
const H3 = styled.h3`
  /* max-width: 314px; */
  max-width: 100%;
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  @media screen and (max-width: 767px) {
    font-weight: 700;
    font-size: 18px;
  }
`;
const P = styled.p`
  /* max-width: 467px; */
  max-width: 100%;
  font-weight: 400;
  font-size: 16px;
  color: #000000;
  @media screen and (max-width: 767px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
`;
