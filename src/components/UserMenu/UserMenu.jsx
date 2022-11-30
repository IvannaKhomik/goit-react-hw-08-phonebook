import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectAuth } from 'redux/auth/selectors';
import {
  UserDesc,
  MenuWrap,
  LogoutBtn,
  ProfileIcon,
  UserTitle,
} from './UserMenu.styled';

export const UserMenu = () => {
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const onLoggedOut = () => {
    dispatch(logout());
  };
  return (
    <>
      <MenuWrap>
        <UserDesc>
          <ProfileIcon />
          <UserTitle>{user.name}</UserTitle>
        </UserDesc>
        <LogoutBtn onClick={onLoggedOut}>Logout</LogoutBtn>
      </MenuWrap>
    </>
  );
};
