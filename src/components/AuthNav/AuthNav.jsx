import { AuthItem, AuthWrap, StyledLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthWrap>
      <AuthItem>
        <StyledLink to="/register">Register</StyledLink>
      </AuthItem>
      <AuthItem>
        <StyledLink to="/login">LogIn</StyledLink>
      </AuthItem>
    </AuthWrap>
  );
};
