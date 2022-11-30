import { ContactForm } from 'components/ContactForm';
import { Contacts } from 'components/Contacts';
import { Container } from 'components/Container';

const ContactsPage = () => {
  return (
    <>
      <Container title="Phonebook">
        <ContactForm />
      </Container>
      <Container title="Contacts">
        <Contacts />
      </Container>
    </>
  );
};

export default ContactsPage;
