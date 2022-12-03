import { useId } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import { Form, FormLabel, InputField, SubmitBtn } from './LoginForm.styled';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const emailInputId = useId();
  const passwordInputId = useId();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor={emailInputId}>Email</FormLabel>
        <InputField
          type="email"
          name="email"
          value={email}
          id={emailInputId}
          onChange={changeInput}
          required
        />
        <FormLabel htmlFor={passwordInputId}>Password</FormLabel>
        <InputField
          type="password"
          name="password"
          value={password}
          id={passwordInputId}
          onChange={changeInput}
          required
        />
        <SubmitBtn type="submit">Login</SubmitBtn>
      </Form>
    </>
  );
};
