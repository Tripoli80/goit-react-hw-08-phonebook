import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Titel, Container } from './ContactBook.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import { getContacts, getFilter } from 'components/redux/selectors';
import { fetchAllContacts } from 'components/redux/services/operations';

export default function ContactBook() {
  const dispatch = useDispatch();
  const { value } = useSelector(getFilter);
  const { items, isLoading } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    if (!Array.isArray(items)) {
      console.log("🚀 ~ typeof items",items)
      return [];
    }
    const contacts = items.filter(item =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    return contacts;
  };
  return (
    <Container>
      <Titel> Phone Book</Titel>
      <ContactForm />
      <Filter />
      <Titel> Contact List</Titel>
      {isLoading && !items.length && <Loader />}
      <ContactList visiblContactsList={getVisibleContacts()} />
    </Container>
  );
}
