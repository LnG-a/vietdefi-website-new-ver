import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import slide1 from './assets/image1.png';
import slide2 from './assets/image2.png';
import slide3 from './assets/image3.png';
import tagList from './assets/tag.png';
import { messages } from './message';
import './index.css';
import SliderContent from '../SliderContent';
import { useTranslation } from 'react-i18next';

// custom next arrow
const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

// custom prev arrow
const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'none' }}
      onClick={onClick}
    />
  );
};

// custom slide
function CustomSlide(props) {
  const { src, title, content } = props;
  return (
    <SlideWrap>
      <Slide src={src} />
      <ContentWrap>
        <SliderContent contentTitle={title} content={content} />
      </ContentWrap>
    </SlideWrap>
  );
}

const Slides: React.FC = () => {
  const setting = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <Paging>
        <PagingWrap>
          <img src={tagList} alt="tag list" />
          {dots}
        </PagingWrap>
      </Paging>
    ),
    customPaging: index => <div>{`0${index + 1}`}</div>,
  };

  const { t } = useTranslation();

  return (
    <SlidesWrap>
      <Slider className="slider-wrap" {...setting}>
        <div>
          <CustomSlide
            src={slide1}
            title={t(messages.slide1Title())}
            content={t(messages.slide1Content())}
          />
        </div>
        <div>
          <CustomSlide
            src={slide2}
            title={t(messages.slide2Title())}
            content={t(messages.slide2Content())}
          />
        </div>
        <div>
          <CustomSlide
            src={slide3}
            title={t(messages.slide3Title())}
            content={t(messages.slide3Content())}
          />
        </div>
      </Slider>
    </SlidesWrap>
  );
};

export default Slides;

const SlidesWrap = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Slide = styled.img`
  z-index: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%
  );
`;

const Paging = styled.div`
  background-color: transparent;
  position: absolute;
  bottom: 48px;
  text-align: right;
  color: '#fff';
  font-size: 14px;
  @media (max-width: 768px) {
    bottom: 16px;
    font-size: 10px;
  }
`;

const SlideWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-items: baseline;
  }
`;

const ContentWrap = styled.div`
  position: absolute;
  display: flex;
  padding: 0 45px 0 30px;
  align-items: flex-start;
  margin: 0 auto;
  width: 100%;
  height: 100%;

  @media (min-width: 1600px) {
    max-width: 1544px;
  }
`;

const PagingWrap = styled.ul`
  margin: 0 auto;
  padding: 0 30px;
  list-style: none;
  color: #fff;
  @media (min-width: 1600px) {
    max-width: 1544px;
  }
`;
