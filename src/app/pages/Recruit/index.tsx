import { Helmet } from 'react-helmet-async';
import Position from './components/Position';
import Footer from 'app/components/Footer/Footer';
import JD from './components/Position/JD';
import { useState } from 'react';
import Banner from 'app/components/Banner';
import { useTranslation } from 'react-i18next';
import { messages } from './message';
import styled from 'styled-components';
import Introduce from './components/Introduce';
import Process from './components/Process';
import Header from 'app/components/Header';

export const Recruit = () => {
  const [stateId, setStateId] = useState('0');
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Helmet>
        <title>Recruit</title>
        <meta name="description" content="VietDefi" />
      </Helmet>
      <Banner
        title={t(messages.title())}
        subtitle={t(messages.subtitle())}
      ></Banner>
      <Section>
        <Introduce />
      </Section>
      <ColoredSection>
        <Process />
      </ColoredSection>
      <Section>
        <Position setStateId={setStateId} stateId={stateId} />
      </Section>
      <JD setStateId={setStateId} stateId={stateId} />
      <Footer />
    </>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ColoredSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fefcf8;
`;
