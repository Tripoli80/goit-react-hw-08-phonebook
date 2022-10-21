import React, { useEffect, useState } from 'react';
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
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isButtonEdit, setIsButtonEdit] = useState(false);
  const [userIdToEdit, setUserIdToEdit] = useState(null);
  const onChangeForma = obj => {
    const { value } = obj.target;

    switch (obj.target.name) {
      case 'name': {
        setName(value);
        break;
      }
      case 'number': {
        setNumber(value);
        break;
      }
      default:
        console.log(`Якась помилка з назвою інпута`);
    }
  };

  const onResetInput = () => {
    setName('');
    setNumber('');
    setUserIdToEdit(null);
    setIsButtonEdit(false);
  };

  const onEdit = (event, id) => {
    console.log('🚀 ~ id', id);
    const name = event.target.getAttribute('data-user-name');
    const number = event.target.getAttribute('data-user-number');
    setName(name);
    setNumber(number);
    setUserIdToEdit(id);
    setIsButtonEdit(true);
   
  };

  const getVisibleContacts = () => {
    if (!Array.isArray(items)) {
      console.log('🚀 ~ typeof items', items);
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
      <ContactForm
        name={name}
        number={number}
        isButtonEdit={isButtonEdit}
        onChangeForma={onChangeForma}
        userId={userIdToEdit}
        onResetInput={onResetInput}
      />
      <Filter />
      <Titel> Contact List</Titel>
      {isLoading && !items.length && <Loader />}
      <ContactList visiblContactsList={getVisibleContacts()} onEdit={onEdit} />
    </Container>
  );
}
