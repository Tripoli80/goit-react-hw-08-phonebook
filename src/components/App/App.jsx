import { nanoid } from 'nanoid';
import { Titel, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  changeFilter,
  removeContact,
} from 'components/redux/Slice';
import {
  fetchContacts,
  addContacts,
  _removeContact,
} from 'components/redux/services/phoneShelfAPI';
import { useEffect } from 'react';
import Loader from 'components/Loader/Loader';

export const App = () => {
  const dispatch = useDispatch();
  let contacts;
  const filter = useSelector(state => state.filter);
  const { items, isLoading, error } = useSelector(state => state.contacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  contacts = items;
  // console.log("🚀 ~ file: App.jsx ~ line 30 ~ App ~ contacts", contacts)
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

  const onAddContact = ({ e, onResetInput ,setIsSending}) => {
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

    addContacts(newContactToAdd, dispatch).then(id => {
      newContactToAdd.id = id;
      // dispatch(addContact(newContactToAdd));
      setIsSending(false)
      onResetInput();
    });
  
   
  };

  const onRemoveContact = async( id) => {
    // console.log('id', id)
    _removeContact(id, dispatch).then(()=> {
                            console.log(id);
                            dispatch(removeContact(id));
                             });
    // dispatch(fetchContacts());
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
      {isLoading&&!items.length && <Loader />}
      <ContactList
        visiblContactsList={visiblContactsList}
        onRemoveContact={onRemoveContact}
        isLoading={isLoading}
      />
    </Container>
  );
};
