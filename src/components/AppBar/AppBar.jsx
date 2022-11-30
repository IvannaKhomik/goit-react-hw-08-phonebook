import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuth } from 'redux/auth/selectors';
// import { UserMenu } from 'components/UserMenu';
import { Header, NavBar, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useSelector(selectAuth);

  return (
    <Header>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}{' '}
      </NavBar>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
