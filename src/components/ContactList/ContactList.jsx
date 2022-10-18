import Btn from './Btn';
import { ListContacts, ContactItem } from './ContactList.styled';

const ContactList = props => {
  const { onRemoveContact, visiblContactsList, isLoading } = props;
  const contactItem = visiblContactsList.map(item => (
    <ContactItem key={item.id}>
      Name: {item.name} Phone: {item.number}
      <Btn
        onRemoveContact={onRemoveContact}
        isLoading={isLoading}
        id={item.id}
      />
    </ContactItem>
  ));

  return <ListContacts>{contactItem}</ListContacts>;
};
export default ContactList;
