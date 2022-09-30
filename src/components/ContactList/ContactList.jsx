import { ListContacts, ContactItem, RemoveBtn } from './ContactList.styled';
const ContactList = props => {
  const { onRemoveContact, visiblContactsList } = props;
  const contactItem = visiblContactsList.map(item => (
    <ContactItem key={item.id}>
      Name: {item.name} Phone: {item.number}
      <RemoveBtn onClick={() => onRemoveContact(item.id)}>D</RemoveBtn>
    </ContactItem>
  ));

  return <ListContacts>{contactItem}</ListContacts>;
};
export default ContactList;
