import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../../components/Header';
import Footer from '../../components/Footer/Footer';
import CoreValues from './components/CoreValues';

import { messageStory } from './message';
import { useTranslation } from 'react-i18next';
import Banner from 'app/components/Banner';
import Quote from './components/Quote/quote';
import Vision from './components/Vision';
import styled from 'styled-components';
import EmployeeSlider from 'app/components/EmployeeSlider/Employee';
import Culture from './components/Culture';

export default function About() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <Helmet>
        <title>About</title>
        <meta name="description" content="VietDefi" />
      </Helmet>
      <Banner
        title={t(messageStory.about_storyTitle())}
        subtitle={t(messageStory.about_storyDescription())}
      ></Banner>
      <Section>
        <Vision />
      </Section>
      <Section>
        <Quote />
      </Section>
      <Section>
        <CoreValues />
      </Section>
      <ColoredSection>
        <Culture />
      </ColoredSection>
      <EmployeeSlider></EmployeeSlider>
      <Footer></Footer>
    </>
  );
}

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
