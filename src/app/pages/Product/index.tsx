import Banner from 'app/components/Banner';
import Header from 'app/components/Header';
import { useTranslation } from 'react-i18next';
import Footer from '../../components/Footer/Footer';
import Dichvule from './components/Dichvule';
import EarlyBird from './components/EarlyBird';
import Gochie from './components/Gochie';
import Izhouse from './components/Izhouse';
import { messages } from './message';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';

export const Product = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Helmet>
        <title>Product </title>
        <meta name="description" content="VietDefi" />
      </Helmet>
      <Banner title={t(messages.title())} subtitle={t(messages.subtitle())} />
      <Gochie />
      <Colored>
        <EarlyBird />
      </Colored>
      <Izhouse />
      <Colored>
        <Dichvule />
      </Colored>
      <Footer></Footer>
    </>
  );
};
const Colored = styled.div`
  background-color: #fefcf8;
`;
