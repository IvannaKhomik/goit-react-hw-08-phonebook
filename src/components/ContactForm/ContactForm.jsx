import React, { useState, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { selectContacts } from 'redux/contacts/selectors';
import { Form, FormLabel, InputField, SubmitBtn } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const nameInputId = useId();
  const telInputId = useId();

  const changeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      number,
    };
    const contactName = contact.name;
    const isInclude = contacts.some(item => contactName === item.name);

    Notify.init({
      position: 'center-top',
    });

    isInclude
      ? Notify.failure(`${contactName} is already in contacts.`)
      : dispatch(addContact(contact));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor={nameInputId}>Name</FormLabel>
      <InputField
        type="text"
        name="name"
        value={name}
        id={nameInputId}
        onChange={changeInput}
        placeholder="Jacob Mercer"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <FormLabel htmlFor={telInputId}>Number</FormLabel>
      <InputField
        type="tel"
        name="phone"
        value={number}
        id={telInputId}
        onChange={changeInput}
        placeholder="555-55-55"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn type="submit">Add contact</SubmitBtn>
    </Form>
  );
};
