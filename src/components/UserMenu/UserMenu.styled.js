import styled from 'styled-components';
import { GrUserExpert } from 'react-icons/gr';

export const MenuWrap = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
`;

export const UserDesc = styled.div`
  display: flex;
  align-items: center;
  margin-right: 16px;
`;

export const UserTitle = styled.p`
  text-transform: uppercase;
`;

export const LogoutBtn = styled.button`
  color: #343434;
  text-decoration: none;
  padding: 8px 16px;
  border: 1px solid #343434;
  outline: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #fff;
  transition: all 250ms ease-out;

  &.focus,
  &:hover {
    color: #fff;
    background-color: #e6b31e;
    border-color: transparent;
  }
`;

export const ProfileIcon = styled(GrUserExpert)`
  margin-right: 8px;
  width: 24px;
  height: auto;
`;
