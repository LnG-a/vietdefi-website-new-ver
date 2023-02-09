import styled from 'styled-components';
import LanguageBtn from './LanguageBtn';
import { Menu } from './Menu';
import MenuIconImg from './assets/menu.png';
import MenuIconImgScroll from './assets/menu-scroll.png';
import { ScrollColor } from '.';
import './css/Menu.css';

export const HeaderRight = (props: ScrollColor) => {
  const handleClick = () => {
    props.setHidden(!props.hidden);
    props.setClick(false);
  };

  return (
    <HeaderRightWrap>
      <div style={{ position: 'relative' }}>
        <MenuIcon onClick={() => handleClick()} scrolly={props.scrolly} />
        <Menu
          className={`${props.hidden ? 'hidden' : ''}`}
          setHidden={props.setHidden}
          scrolly={props.scrolly}
        />
      </div>
      <LanguageBtn
        scrolly={props.scrolly}
        click={props.click}
        setClick={props.setClick}
        setHidden={props.setHidden}
      />
    </HeaderRightWrap>
  );
};

const HeaderRightWrap = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 999999;
  transition: all 0.3s ease-in-out;
`;

const MenuIcon = styled.div<ScrollColor>`
  // eslint-disable-next-line prettier/prettier
  background-image: url(${props =>
    props.scrolly > 50 ? MenuIconImgScroll : MenuIconImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  margin-right: 16px;
  display: none;

  @media (max-width: 960px) {
    display: block;
  }
`;
