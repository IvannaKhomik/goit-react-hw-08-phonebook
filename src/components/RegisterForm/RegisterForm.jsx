import { useId } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form, FormLabel, InputField, SubmitBtn } from './RegisterForm.styled';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const nameInputId = useId();
  const emailInputId = useId();
  const passwordInputId = useId();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      name,
      email,
      password,
    };
    dispatch(register(user));
    console.log(user);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor={nameInputId}>Name</FormLabel>
        <InputField
          type="text"
          name="name"
          value={name}
          id={nameInputId}
          onChange={changeInput}
          required
        />
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

        <SubmitBtn type="submit">Register</SubmitBtn>
      </Form>
    </>
  );
};
