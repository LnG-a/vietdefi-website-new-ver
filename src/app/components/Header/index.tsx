import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Logo } from '../Logo';
import { HeaderRight } from './HeaderRight';

export interface ScrollColor {
  scrolly: number;
  click?: any;
  hidden?: any;
  setClick?: any;
  setHidden?: any;
}

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [click, setClick] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(true);

  const headerScroll = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    window.addEventListener('scroll', headerScroll);
    return () => {
      window.removeEventListener('scroll', headerScroll);
    };
  }, []);

  const handleClickClose = () => {
    setClick(false);
    setHidden(true);
  };

  return (
    <HeaderWrap scrolly={scrollY}>
      <HeaderContainer scrolly={scrollY}>
        <Logo scrolly={scrollY} setClick={setClick} setHidden={setHidden} />
        <HeaderRight
          scrolly={scrollY}
          click={click}
          setClick={setClick}
          hidden={hidden}
          setHidden={setHidden}
        />
      </HeaderContainer>
      {(click || !hidden) && <HeaderDisable onClick={handleClickClose} />}
    </HeaderWrap>
  );
};

export default Header;

const HeaderDisable = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999998;
`;

const HeaderContainer = styled.div<ScrollColor>`
  width: 100%;
  max-width: 1440px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 12px;
  }

  @media (min-width: 1600px) {
    max-width: 1544px;
  }
`;

const HeaderWrap = styled.div<ScrollColor>`
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 9999;
  transition: 0.25s ease-out;
  background-color: ${props => (props.scrolly > 50 ? 'white' : 'transparent')};
  border-bottom: ${props => (props.scrolly > 50 ? '1px solid #ccc' : 'none')};
`;
