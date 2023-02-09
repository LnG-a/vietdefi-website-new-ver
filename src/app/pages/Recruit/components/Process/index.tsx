import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './Process.css';

const Process: React.FC = () => {
  const { t } = useTranslation();

  return (
    <ProcessWrap>
      <div className="process_header">
        <h1>{t('RecruitPage.Process.title')}</h1>
      </div>
      <div className="process_list">
        <div className="process_item">
          <div className="process_icon">1</div>
          <p className="process_content">{t('RecruitPage.Process.step_1')}</p>
        </div>
        <div className="process_item">
          <div className="process_icon">2</div>
          <p className="process_content">{t('RecruitPage.Process.step_2')}</p>
        </div>
        <div className="process_item">
          <div className="process_icon">3</div>
          <p className="process_content">{t('RecruitPage.Process.step_3')}</p>
        </div>
        <div className="process_item">
          <div className="process_icon">4</div>
          <p className="process_content">{t('RecruitPage.Process.step_4')}</p>
        </div>
        <div className="process_item">
          <div className="process_icon">5</div>
          <p className="process_content">{t('RecruitPage.Process.step_5')}</p>
        </div>
      </div>
    </ProcessWrap>
  );
};

export default Process;

const ProcessWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 4% 120px;
  @media (max-width: 855px) {
    padding: 50px 4%;
  }
`;
