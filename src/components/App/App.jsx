import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { Titel, Container } from './App.styled';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  componentDidMount() {
    const state = JSON.parse(localStorage.getItem('state'));
    if (localStorage.getItem('state')) this.setState(state);
  }
  componentDidUpdate() {
    localStorage.setItem('state', JSON.stringify(this.state));
  }
  onChangeForma = obj => {
    const { name, value } = obj.target;
    this.setState({
      [name]: value,
    });
  };
  checkExistContact = ({ dataToCheck, keyWhereCheck }) => {
    const res = this.state.contacts.filter(
      item => item[keyWhereCheck].toLowerCase() === dataToCheck.toLowerCase()
    );
    return res.length;
  };
  onAddContact = ({ e, onResetInput }) => {
    e.preventDefault();
    const { name, number } = e.target;

    // console.log(e.target.number.value);

    if (
      this.checkExistContact({ dataToCheck: name.value, keyWhereCheck: 'name' })
    ) {
      alert(`${name.value} already in book`);
      return;
    }
    this.setState(prevState => {
      const neewArr = [
        ...prevState.contacts,
        {
          id: nanoid(),
          [name.name]: name.value,
          [number.name]: number.value,
        },
      ];
      return {
        contacts: neewArr,
      };
    }, onResetInput());
  };

  onRemoveContact = id => {
    const resContacts = this.state.contacts.filter(item => item.id !== id);
    this.setState({
      contacts: resContacts,
    });
  };

  getVisibleContacts = () => {
    // console.log(contacts);
    const resContacts = this.state.contacts.filter(item =>
      item.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    // console.log('first');
    return resContacts;
  };

  render() {
    const visiblContactsList = this.getVisibleContacts();
    return (
      <Container>
        <Titel> Phone Book</Titel>
        <ContactForm state={this.state} onAddContact={this.onAddContact} />
        <Filter state={this.state} onChangeForma={this.onChangeForma} />
        <Titel> Contact List</Titel>
        <ContactList
          state={this.state}
          visiblContactsList={visiblContactsList}
          onRemoveContact={this.onRemoveContact}
        />
      </Container>
    );
  }
}
