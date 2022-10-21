import { removeContact } from 'components/redux/services/operations';
import { useDispatch } from 'react-redux';
import Btn from './Btn';
import { BtnBox } from './ContactList.styled';

import { ListContacts, ContactItem } from './ContactList.styled';

const ContactList = ({ visiblContactsList, onEdit }) => {
  const dispatch = useDispatch();
  const onRemoveContact = (_, id) => {
    console.log('🚀 ~ id', id);
    dispatch(removeContact(id));
  };

  const contactItem = visiblContactsList.map(({ id, name, number }) => (
    <ContactItem key={id}>
      Name: {name} Phone: {number}
      <BtnBox>
        <Btn onClick={onRemoveContact} id={id} nameBtn="remove" />
        <Btn
          onClick={onEdit}
          id={id}
          userdata={{ name: name, number: number }}
          nameBtn="Edit"
        />
      </BtnBox>
    </ContactItem>
  ));

  return <ListContacts>{contactItem}</ListContacts>;
};
export default ContactList;
