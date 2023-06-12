import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  text-decoration: none;
  color: black;


  &.active {
    color: blue;
    background-color: ;
  }
`;
export const Header = styled.header`
  margin-bottom: 10px;
`;
