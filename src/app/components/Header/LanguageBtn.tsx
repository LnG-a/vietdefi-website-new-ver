import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { ScrollColor } from '.';
import arrowDown from './assets/arrow-down.png';

const LanguageBtn: React.FC<ScrollColor> = props => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState<string>(`${i18n.language}`);

  const handleClick = () => {
    props.setClick(!props.click);
    props.setHidden(true);
  };

  const handleLanguage = e => {
    setLanguage(e.target.innerHTML);
    i18n.changeLanguage(e.target.innerHTML);
  };

  return (
    <>
      <LanguageWrap
        id="button-language"
        onClick={() => handleClick()}
        scrolly={props.scrolly}
      >
        <p style={{ margin: '0', textTransform: 'uppercase' }}>{language}</p>
        <IconLanguage />
        {props.click && (
          <LanguageList scrolly={props.scrolly}>
            <LanguageItem onClick={e => handleLanguage(e)}>vn</LanguageItem>
            <LanguageItem onClick={e => handleLanguage(e)}>en</LanguageItem>
          </LanguageList>
        )}
      </LanguageWrap>
    </>
  );
};

export default LanguageBtn;

const LanguageWrap = styled.div<ScrollColor>`
  width: 78px;
  height: 40px;
  border-radius: 8px;
  outline: none;
  border: none;
  background-color: ${props =>
    props.scrolly > 50 ? 'rgba(0,0,0,0.7)' : 'rgba(255, 255, 255, 0.4)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 50px;
    height: 32px;
    font-size: 12px;
    padding: 0 4px;
  }
`;

const IconLanguage = styled.div`
  background-image: url(${arrowDown});
  background-repeat: no-repeat;
  background-size: contain;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

const LanguageList = styled.ul<ScrollColor>`
  list-style: none;
  width: 100%;
  position: absolute;
  background-color: ${props =>
    props.scrolly > 50 ? 'rgba(0,0,0,0.8)' : 'rgba(255, 255, 255, 0.4)'};
  color: #fff;
  left: 0;
  bottom: -66px;
  padding: 0;
  margin: 0;
  border-radius: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    bottom: -56px;
  }
`;

const LanguageItem = styled.li`
  text-align: center;
  padding: 4px 0;
  margin: 0;
  width: 100%;
  text-transform: uppercase;
  display: block;
  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &:hover {
    background-color: #00baff;
    color: #fff;
  }
`;
