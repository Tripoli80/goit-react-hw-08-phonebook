import { removeContact } from 'components/redux/services/operations';
import { useDispatch } from 'react-redux';
import Btn from './Btn';
import { ListContacts, ContactItem } from './ContactList.styled';

const ContactList = ({ visiblContactsList }) => {
  const dispatch = useDispatch();
  const onRemoveContact = (id) => {
    dispatch(removeContact(id));
  };

  const contactItem = visiblContactsList.map(({id, name, number}) => (
    <ContactItem key={id}>
      Name: {name} Phone: {number}
      <Btn
        onRemoveContact={onRemoveContact}
        id={id}
      />
    </ContactItem>
  ));

  return <ListContacts>{contactItem}</ListContacts>;
};
export default ContactList;
