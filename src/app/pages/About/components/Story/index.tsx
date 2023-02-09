import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import story from './assets/story.png';
import './style.css';
import { useTranslation } from 'react-i18next';
import { messageStory } from '../../message';

interface ImageProp {
  image: any;
}

export default function Story() {
  const { t } = useTranslation();
  return (
    <ContainerStory className="media_container">
      <BoxLeft className="box-left">
        <H1>{t(messageStory.about_storyTitle())}</H1>
        <P>{t(messageStory.about_storyDescription())}</P>
        <H3>{t(messageStory.quote())}</H3>
      </BoxLeft>
      <ImageRight className="box-right" image={story}></ImageRight>
    </ContainerStory>
  );
}

const ContainerStory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 1441px;
  padding: 0 132px 0 139px;
`;
const BoxLeft = styled.div`
  /* max-width: 482px; */
  max-width: 50%;
`;

// const BoxRight = styled.div`
//   /* width: 517px; */
//   width: 50%;
//   height: 100;
// `;

const ImageRight = styled.div<ImageProp>`
  max-width: 517px;
  width: 100%;
  height: 498px;
  background: url(${props => props.image}) no-repeat;
  background-size: contain;
  background-position-y: bottom;
  @media screen and (max-width: 517px) {
    height: 386px;
  }
  @media screen and (max-width: 403px) {
    height: 326px;
  }
  @media screen and (max-width: 320px) {
    height: 255px;
  }
`;

const H1 = styled.h1`
  max-width: 393px;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 24px;
    max-width: 100% !important;
  }
`;
const P = styled.p`
  max-width: 468px;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 16px;
    max-width: 100% !important;
  }
`;
const H3 = styled.h3`
  max-width: 482px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #00baff;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;
