import styled from 'styled-components';
import LogoImg from 'app/assets/logoVietdefi.svg';
import { Link } from 'react-router-dom';
import { ScrollColor } from '../Header';

export const Logo = (props: ScrollColor) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
    props.setClick(false);
    props.setHidden(true);
  };

  return (
    <div>
      <Link to="/">
        <LogoImage src={`${LogoImg}`} alt="logo" onClick={handleClick} />
      </Link>
    </div>
  );
};

const LogoImage = styled.img`
  width: 70px;
  height: auto;
  @media (max-width: 768px) {
    width: 40px;
    height: auto;
  }
`;
