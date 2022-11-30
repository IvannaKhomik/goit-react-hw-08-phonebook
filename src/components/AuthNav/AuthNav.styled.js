import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AuthWrap = styled.ul`
  margin-left: auto;
  display: inline-flex;
`;

export const AuthItem = styled.li`
  list-style: none;

  &:first-child {
    margin-right: 12px;
  }
`;

export const StyledLink = styled(NavLink)`
  color: #343434;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #343434;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fff;
  transition: all 250ms ease-out;

  &.active,
  &:hover {
    color: #fff;
    background-color: #e6b31e;
    border-color: transparent;
  }
`;
