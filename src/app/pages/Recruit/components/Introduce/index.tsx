import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import './Introduce.css';

const Introduce: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IntroduceWrap>
      <div className="introduce_header">
        <h1>{t('RecruitPage.Introduce.title')}</h1>
      </div>
      <Grid>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_1_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_1_content')}</p>
        </div>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_2_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_2_content')}</p>
        </div>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_3_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_3_content')}</p>
        </div>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_4_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_4_content')}</p>
        </div>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_5_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_5_content')}</p>
        </div>
        <div className="introduce_item">
          <h2>{t('RecruitPage.Introduce.item_6_title')}</h2>
          <p>{t('RecruitPage.Introduce.item_6_content')}</p>
        </div>
      </Grid>
    </IntroduceWrap>
  );
};

export default Introduce;

const IntroduceWrap = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 90px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 25%);
  gap: 40px 7%;
  justify-content: center;
  margin-top: 30px;
  @media (max-width: 992px) {
    gap: 20px 10%;
    grid-template-columns: repeat(2, 40%);
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 80%);
  }
`;
