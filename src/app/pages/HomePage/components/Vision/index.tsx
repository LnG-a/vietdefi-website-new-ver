import React from 'react';
import styled from 'styled-components';
import VImage from './assets/VisionImage.jpg';
import VisionDetail from './VisionDetail';
import VisionHeader from './VisionHeader';

const Vision: React.FC = () => {
  return (
    <VisionWrap>
      <VisionContainer>
        <VisionHeader />
        <VisionContent>
          <VisionDetail />
          <VisionImage src={VImage} />
        </VisionContent>
      </VisionContainer>
    </VisionWrap>
  );
};

export default Vision;

const VisionWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const VisionContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 80px 0;
  padding: 0px 20px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const VisionContent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const VisionImage = styled.img`
  max-width: 400px;
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    display: none;
  }
`;
