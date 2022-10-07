import { useState } from 'react';
import { nanoid } from 'nanoid';

import { Titel, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { useLocalStorage } from 'hooks/useLocalStorege';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  changeFilter,
  removeContact,
} from 'components/redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const onChangeForma = obj => {
    const { value } = obj.target;
    dispatch(changeFilter(value));
  };

  const checkExistContact = ({ dataToCheck, keyWhereCheck }) => {
    const res = contacts.filter(
      item => item.name.toLowerCase() === dataToCheck.toLowerCase()
    );
    return res.length;
  };

  const onAddContact = ({ e, onResetInput }) => {
    e.preventDefault();
    const { name, number } = e.target;

    if (checkExistContact({ dataToCheck: name.value })) {
      alert(`${name.value} already in book`);
      return;
    }

    const newContactToAdd = {
      id: nanoid(),
      name: name.value,
      number: number.value,
    };
    dispatch(addContact(newContactToAdd));
    onResetInput();
  };

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  const getVisibleContacts = () => {
    const resContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    return resContacts;
  };
  const visiblContactsList = getVisibleContacts();

  return (
    <Container>
      <Titel> Phone Book</Titel>
      <ContactForm onAddContact={onAddContact} />
      <Filter filter={filter} onChangeForma={onChangeForma} />
      <Titel> Contact List</Titel>
      <ContactList
        visiblContactsList={visiblContactsList}
        onRemoveContact={onRemoveContact}
      />
    </Container>
  );
};
