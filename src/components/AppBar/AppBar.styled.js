import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 12px 0;
  border-bottom: 2px solid #ffe6f7;
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;
export const StyledLink = styled(NavLink)`
  color: #343434;
  position: relative;
  padding: 8px 12px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  transition: border-width 500ms linear;
  text-transform: uppercase;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: #e6b31e;
    opacity: 0;
    transform: scaleX(0);
    transform-origin: left;
    transition: opacity 500ms ease-out, transform 500ms ease-out;
  }
  &.active {
    color: #e6b31e;
  }

  &.active::after,
  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }
`;

export const NavBar = styled.nav`
  display: inline-block;
`;
