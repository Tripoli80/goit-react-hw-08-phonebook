import { getFilter } from 'components/redux/selectors';
import { changeFilter } from 'components/redux/services/Slice';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactFormFilter,
  LableSearchName,
  InputSearchName,
} from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector(getFilter);

  const onChangeForma = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <ContactFormFilter>
      <LableSearchName htmlFor="filter">Finde Contact by Name</LableSearchName>
      <InputSearchName
        name="filter"
        // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Rnter some later"
        value={value}
        id="filter"
        required
        onChange={onChangeForma}
      ></InputSearchName>
    </ContactFormFilter>
  );
};

export default Filter;
