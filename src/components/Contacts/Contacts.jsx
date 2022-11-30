import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';
import { Loader } from 'components/Loader';
import { NotFound } from 'components/NotFound';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectErrorMessage,
  selectLoadingStatus,
} from 'redux/contacts/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoadingStatus);
  const error = useSelector(selectErrorMessage);
  const contacts = useSelector(selectContacts);

  const isLoaded = contacts.length > 0;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <NotFound />}
      {!isLoading && isLoaded && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
    </>
  );
};
