import React from 'react';
import styled from 'styled-components';

interface SlideContent {
  contentTitle: string;
  content: string;
}
const SliderContent: React.FC<SlideContent> = props => {
  return (
    <ContentWrap>
      <ContentTitle>{props.contentTitle}</ContentTitle>
      <ContentContent>{props.content}</ContentContent>
    </ContentWrap>
  );
};

export default SliderContent;

const ContentWrap = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ContentTitle = styled.h1`
  font-size: 48px;
  font-weight: 700;
  color: #fff;
  max-width: 100%;
  margin-bottom: 25px;
  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }

  @media (min-width: 1600px) {
    max-width: 100%;
    margin-bottom: 24px;
  }
`;

const ContentContent = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  word-wrap: break-word;
  margin-bottom: 44px;
  max-width: 100%;
  text-align: justify;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 576px) {
    font-size: 16px;
    line-height: 1.5rem;
  }
`;
