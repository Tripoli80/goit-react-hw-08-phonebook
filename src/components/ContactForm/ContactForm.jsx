import Loader from 'components/Loader/Loader';
import { getContacts } from 'components/redux/selectors';
import {
  addContact,
  checkExistContact,
} from 'components/redux/services/operations';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InputName, ContactFormAdd, SubmitBtn } from './ContactForm.styled';
import { NotificationManager } from 'react-notifications';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSending, setIsSending] = useState(false);
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();

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
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkExistContact(name, items)) {
      setIsSending(true);

      NotificationManager.warning(
        'Try another name',
        `"${name.toUpperCase()}" already in book`
      );

      setIsSending(false);

      return;
    }
    const data = {
      name: name,
      number: number,
    };

    dispatch(addContact(data)).then(() => {
      setIsSending(false);
      onResetInput();
    });
  };

  return (
    <div>
      <ContactFormAdd
        onSubmit={e => {
          setIsSending(true);
          handleSubmit(e);
        }}
      >
        <InputName
          placeholder="Name"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={e => onChangeForma(e)}
        />
        <InputName
          placeholder="Phone Number"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          required
          onChange={e => onChangeForma(e)}
        />
        <SubmitBtn disabled={isSending}>
          Add to my contact{isSending && <Loader width={16} />}
        </SubmitBtn>
      </ContactFormAdd>
    </div>
  );
};

export default ContactForm;
