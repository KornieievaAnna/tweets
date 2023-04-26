import styled from 'styled-components';
import { GlowingBtn } from './Layout/Layout.styled';

export const Btn = styled(GlowingBtn)`
  padding: 5px 15px;
  font-weight: 500;
  border-radius: 10px;
  margin: 15px;

  &:hover {
    -webkit-box-reflect: unset;
  }
`;
