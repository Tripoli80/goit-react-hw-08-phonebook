import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { RemoveBtn } from './ContactList.styled';

const Btn = props => {
  const [isDel, setIsDel] = useState(false);
  const { onRemoveContact, id } = props;

  return (
    <RemoveBtn
      onClick={() => {
        setIsDel(true);
        onRemoveContact(id);
      }}
    >
      remove {isDel && <Loader width={15} />}
    </RemoveBtn>
  );
};
export default Btn;
