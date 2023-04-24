import styled from 'styled-components';

export const GlowingBtn = styled.button`
  padding: 10px 30px;
  background-color: #c7b9e8;
  color: #9078c6;
  font-weight: bold;
  border: solid;
  border-radius: 5px;
  letter-spacing: 4px;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  margin: 20px;
  &:hover {
    background: #9078c6;
    color: #5736a3;
    box-shadow: 0 0 5px #9078c6, 0 0 25px #9078c6, 0 0 50px #9078c6,
      0 0 70px #9078c6;
    -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  }
`;
