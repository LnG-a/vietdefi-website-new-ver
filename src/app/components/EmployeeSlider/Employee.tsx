import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { slickFull } from './dataEmployee';
import { messages } from './messages';
import Slider from 'react-slick';
import 'react-slideshow-image/dist/styles.css';
import SlideEmployee from './SlideEmployee';
import { dataImage } from './assets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Employee.css';

export default function EmployeeSlider() {
  const { t } = useTranslation();
  const settings = {
    slidesToShow: 4,
    swipeToSlide: true,
    className: 'center',
    infinite: true,
    adaptiveHeight: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    centerPadding: `100px`,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1234,
        settings: {
          slidesToShow: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          infinite: true,
        },
      },
    ],
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: `40px`,
          height: `40px`,
          display: 'block',
          background: `url(${dataImage.arrowRight}) no-repeat `,
          backgroundSize: `contain`,
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: `40px`,
          height: `40px`,
          display: 'block',
          background: `url(${dataImage.arrowLeft}) no-repeat `,
          backgroundSize: `contain`,
        }}
        onClick={onClick}
      />
    );
  }

  return (
    <OuterParent className="repon_pr">
      <Outer className="width-full">
        <Container className="container-fluid container7">
          <Row className="row">
            <Column className="col-xl-12">
              <div className="container7_title">
                <h2>{t(messages.employeeTitle())}</h2>
              </div>
            </Column>
          </Row>
          <Row className="row setWidth">
            <Column className="col-xl-12 ">
              <Slider {...settings}>
                {slickFull.map((ele, index) => {
                  return (
                    <SlideEmployee employees={ele} key={ele.id}></SlideEmployee>
                  );
                })}
              </Slider>
            </Column>
          </Row>
        </Container>
      </Outer>
    </OuterParent>
  );
}
const OuterParent = styled.div`
  width: 100%;
  color: black;
  overflow-x: hidden;
`;
const Outer = styled.div``;
const Container = styled.div``;
const Row = styled.div``;
const Column = styled.div``;
