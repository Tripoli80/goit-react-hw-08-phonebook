import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { InputName, ContactFormAdd, SubmitBtn } from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isSending, setIsSending] = useState(false);

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

  return (
    <div>
      <ContactFormAdd
        onSubmit={e => {
          setIsSending(true);
          onAddContact({ e: e, onResetInput: onResetInput, setIsSending:setIsSending });
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
