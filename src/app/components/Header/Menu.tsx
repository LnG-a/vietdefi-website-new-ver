import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { messages } from './message';
import './css/Menu.css';
import { ScrollColor } from '.';

interface MenuInterface {
  className: any;
  setHidden: any;
  scrolly: number;
}

export const Menu: React.FC<MenuInterface> = props => {
  const { t } = useTranslation();
  // let slug = useParams();
  const [activePage, setActivePage] = useState<string>('/');
  let pathName = useLocation().pathname;
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleClick = () => {
    props.setHidden(true);
    scrollToTop();
  };

  useEffect(() => {
    setActivePage(pathName);
    scrollToTop();
  }, [pathName]);

  return (
    <MenuWrap className={props.className}>
      <MenuBtn onClick={() => handleClick()} scrolly={props.scrolly}>
        <MenuLink
          to={'/'}
          className={`${activePage === '/' ? 'active' : ''}`}
          scrolly={props.scrolly}
        >
          {t(messages.homeTitle())}
        </MenuLink>
      </MenuBtn>
      <MenuBtn onClick={() => handleClick()} scrolly={props.scrolly}>
        <MenuLink
          to={'/about'}
          className={`${activePage === '/about' ? 'active' : ''}`}
          scrolly={props.scrolly}
        >
          {t(messages.aboutTitle())}
        </MenuLink>
      </MenuBtn>
      <MenuBtn onClick={() => handleClick()} scrolly={props.scrolly}>
        <MenuLink
          to={'/product'}
          className={`${activePage === '/product' ? 'active' : ''}`}
          scrolly={props.scrolly}
        >
          {t(messages.productTitle())}
        </MenuLink>
      </MenuBtn>
      <MenuBtn onClick={() => handleClick()} scrolly={props.scrolly}>
        <MenuLink
          to={'/recruit'}
          className={`${activePage === '/recruit' ? 'active' : ''}`}
          scrolly={props.scrolly}
        >
          {t(messages.recruitTitle())}
        </MenuLink>
      </MenuBtn>
    </MenuWrap>
  );
};

const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s linear;
  max-width: 660px;
  margin: 0 30px 0 0;

  @media (max-width: 960px) {
    display: block;
    position: absolute;
    right: 0;
    margin: 0;
  }
`;

const MenuBtn = styled.button<ScrollColor>`
  position: relative;
  background-color: transparent;
  align-items: center;
  outline: none;
  border: none;
  width: fit-content;
  margin: 0 12px;

  @media (max-width: 960px) {
    display: block;
    width: 120px;
    right: 20px;
    margin: 1px;

    background-color: ${props => (props.scrolly > 50 ? '#333' : '#fff')};
  }
`;

const MenuLink = styled(Link)<ScrollColor>`
  padding: 0 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
  align-items: center;
  justify-content: center;
  color: ${props => (props.scrolly > 50 ? '#000' : '#fff')};

  &:hover {
    color: #00baff;
  }
  @media (max-width: 960px) {
    display: block;
    text-align: center;
    font-size: 14px;
    margin: 0.5rem 0;
    color: ${props => (props.scrolly > 50 ? '#fff' : '#000')};
  }
`;
