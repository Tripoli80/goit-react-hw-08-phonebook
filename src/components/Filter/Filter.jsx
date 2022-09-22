import React, { Component } from 'react';
import {
  ContactFormFilter,
  LableSearchName,
  InputSearchName,
} from './Filter.styled';

export default class Filter extends Component {
  render() {
    const { filter } = this.props.state;
    const { onChangeForma } = this.props;


    return (
      <ContactFormFilter>
        <LableSearchName htmlFor='filter'>Finde Contact by Name</LableSearchName>
        <InputSearchName
      
        name="filter"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Rnter some later"
        value={filter}
        id="filter"
        
        required
        onChange={e => onChangeForma(e)}></InputSearchName>
      </ContactFormFilter>
      
    );
  }
}
