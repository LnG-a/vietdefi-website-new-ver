import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { messages } from './message';

const VisionHeader = () => {
  const { t } = useTranslation();

  return <ContentHeader>{t(messages.title())}</ContentHeader>;
};

export default VisionHeader;

const ContentHeader = styled.h2`
  margin-bottom: 60px;
  font-size: 40px;
  font-weight: 700;
  color: #00baff;
`;
