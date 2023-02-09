import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Slides from './components/Slider';
import Vision from './components/Vision';
import Product from './components/Product';
import Recruit from './components/Recruit/Recruit';
import Footer from '../../components/Footer/Footer';
import Header from 'app/components/Header';
import EmployeeSlider from 'app/components/EmployeeSlider/Employee';

export const HomePage = () => {
  return (
    <>
      <Header />
      <Helmet>
        <title>HomePage</title>
        <meta name="description" content="VietDefi" />
      </Helmet>
      <Section>
        <Slides />
      </Section>
      <Section>
        <Vision />
      </Section>
      <ProductSection>
        <Product />
      </ProductSection>
      <Recruit />
      <EmployeeSlider></EmployeeSlider>
      <Footer></Footer>
    </>
  );
};

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProductSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fefcf8;
`;
