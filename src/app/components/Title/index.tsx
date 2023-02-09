import styled from 'styled-components';

export function Title(props) {
  return (
    <>
      <h1>props.title</h1>
    </>
  );
}

const TitleComponent = styled.div`
  font-size: 40px;
  margin-bottom: 60px;
  font-weight: bold;
  color: #00baff;
  @media screen and (max-width: 1200px) {
    align-self: center;
  }
  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;
