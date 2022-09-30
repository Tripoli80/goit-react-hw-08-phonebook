import {
  ContactFormFilter,
  LableSearchName,
  InputSearchName,
} from './Filter.styled';

const Filter = props => {
  const { onChangeForma, filter } = props;

  return (
    <ContactFormFilter>
      <LableSearchName htmlFor="filter">Finde Contact by Name</LableSearchName>
      <InputSearchName
        name="filter"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Rnter some later"
        value={filter}
        id="filter"
        required
        onChange={e => onChangeForma(e)}
      ></InputSearchName>
    </ContactFormFilter>
  );
};

export default Filter;
