import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { messages } from './message';
import './Vision.css';

const Vision: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProcessWrap>
      <div className="process-header">{t(messages.title())}</div>
      <div className="process-list">
        <div className="process-item">
          <p className="year">2022</p>

          <div className="process-icon"></div>
          <p className="process-content">{t(messages.year2022())}</p>
        </div>
        <div className="process-item">
          <p className="year">2023</p>

          <div className="process-icon"></div>
          <p className="process-content">{t(messages.year2023())}</p>
        </div>
        <div className="process-item">
          <p className="year">2024</p>

          <div className="process-icon"></div>
          <p className="process-content">{t(messages.year2024())}</p>
        </div>
        <div className="process-item">
          <p className="year">2025</p>

          <div className="process-icon"></div>
          <p className="process-content">{t(messages.year2025())}</p>
        </div>
        <div className="process-item">
          <p className="year">2026</p>

          <div className="process-icon"></div>
          <p className="process-content">{t(messages.year2026())}</p>
        </div>
      </div>
    </ProcessWrap>
  );
};

export default Vision;

const ProcessWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 5%;
  @media (max-width: 855px) {
    padding: 50px 4%;
  }
`;
