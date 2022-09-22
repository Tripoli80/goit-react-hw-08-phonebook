import React, { Component } from "react";
import { ListContacts, ContactItem, RemoveBtn } from "./ContactList.styled";
export default class ContactList extends Component {
  render() {
    const { onRemoveContact, visiblContactsList } = this.props;
    const contactItem = visiblContactsList.map((item) => (
      <ContactItem key={item.id}>
        Name: {item.name} Phone: {item.number}
        <RemoveBtn onClick={() => onRemoveContact(item.id)}>D</RemoveBtn>
      </ContactItem>
    ));

    return <ListContacts>{contactItem}</ListContacts>;
  }
}
