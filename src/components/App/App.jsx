import { Titel, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';

import { useDispatch, useSelector } from 'react-redux';
import { fetchAllContacts } from 'components/redux/services/operations';
import { useEffect } from 'react';
import { getContacts, getFilter } from 'components/redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const {value} = useSelector(getFilter);
  const { items, isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const contacts = items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    return contacts;
  };

  return (
    <Container>
      <Titel> Phone Book</Titel>
      <ContactForm />
      <Filter  />
      <Titel> Contact List</Titel>
      {isLoading && !items.length && <Loader />}
      <ContactList visiblContactsList={getVisibleContacts()} />
    </Container>
  );
};
