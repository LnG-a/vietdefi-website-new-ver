import { useTranslation as UseTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { messages } from './messages';
import './index.css';

export default function Culture() {
  const { t } = UseTranslation();

  return (
    <MainContainer>
      <MainContent>
        <Tittle>{t(messages.title())}</Tittle>
        <div className="culture-content-wrapper">
          <div className="culture-card">
            <div className="title">{t(messages.title1())}</div>
            <div className="subtitle">{t(messages.subtitle1())}</div>
          </div>
          <div className="culture-card">
            <div className="title">{t(messages.title2())}</div>
            <div className="subtitle">{t(messages.subtitle2())}</div>
          </div>
          <div className="culture-card">
            <div className="title">{t(messages.title3())}</div>
            <div className="subtitle">{t(messages.subtitle3())}</div>
          </div>
        </div>
      </MainContent>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin 80px 0;
`;

const MainContent = styled.div`
  max-width: 1200px;
  flex-direction: column;
  display: flex;
  width: 100%;
  padding: 0 20px;
`;

const Tittle = styled.div`
  color: #00baff;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 60px;
  align-self: center;
  /* @media (max-width: 768px) {
    align-self: center;
  } */
`;
