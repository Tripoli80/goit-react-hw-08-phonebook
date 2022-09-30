import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { Titel, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const useLocalStorage = (key, defaultValue) => {
  // абстактные значения клоторые возврааются при каждом вызове данной функции
  const [state, setState] = useState(
    () => JSON.parse(localStorage.getItem(`${key}`)) ?? defaultValue
  );
  // на каждый сгенерированый вызов данной функции мы вешаем эфект записи в локал сторейдж используя ключ с пропсов и только что созданый стейт
  useEffect(() => {
    window.localStorage.setItem(`${key}`, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export const App = () => {
  const [contacts, setContacts] = useLocalStorage(`contacts`, []);
  const [filter, setFilter] = useLocalStorage(`filter`, '');

  const onChangeForma = obj => {
    const { value } = obj.target;
    setFilter(value);
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

    setContacts(prevContacts => {
      return [
        ...prevContacts,
        {
          id: nanoid(),
          name: name.value,
          number: number.value,
        },
      ];
    });
    onResetInput();
  };

  const onRemoveContact = id => {
    const resContacts = contacts.filter(item => item.id !== id);
    setContacts(resContacts);
  };

  const getVisibleContacts = () => {
    const resContacts = contacts.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
    // console.log('first');
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
