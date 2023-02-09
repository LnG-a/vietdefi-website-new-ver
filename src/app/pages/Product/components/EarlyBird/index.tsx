import { useTranslation as UseTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { messages } from './messages';
import './index.css';
import pic1 from 'app/assets/logoEarlyBirdColored.svg';

export default function EarlyBird() {
  const { t } = UseTranslation();

  return (
    <MainContainer>
      <MainWrapper>
        <ImageContent>
          <div className="product-img pic-early-bird-1">
            <img src={pic1} alt="pic-early-bird-1"></img>
          </div>
          <div className="product-img pic-early-bird-2">
            <img src={pic1} alt="pic-early-bird-2"></img>
          </div>
          <div className="product-img pic-early-bird-3">
            <img src={pic1} alt="pic-early-bird-3"></img>
          </div>
          <div className="product-img pic-early-bird-4">
            <img src={pic1} alt="pic-early-bird-4"></img>
          </div>
        </ImageContent>
        <MainContent>
          <Title>{t(messages.title())}</Title>
          <Subtitle>{t(messages.subtitle())}</Subtitle>
          <List>
            <li>{t(messages.list1())}</li>
            <li>{t(messages.list2())}</li>
            <li>{t(messages.list3())}</li>
            <li>{t(messages.list4())}</li>
          </List>
        </MainContent>
      </MainWrapper>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 80px 0;
`;

const MainWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  padding: 0 20px;
  width: 100%;
  height: 400px;
  display: flex;
  @media screen and (max-width: 768px) {
    padding: 0 50px;

    flex-direction: column-reverse;
    justify-content: start;
    height: 700px;
  }
  @media screen and (max-width: 576px) {
    height: 800px;
  }
`;

const MainContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #00baff;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;

const Subtitle = styled.div`
  font-size: 18px;
  text-align: justify;
`;

const ImageContent = styled.div`
  position: relative;
  width: 60%;
  @media screen and (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

const List = styled.ul`
  font-size: 18px;
  padding-left: 20px;
`;
