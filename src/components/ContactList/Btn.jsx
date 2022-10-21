import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import { RemoveBtn } from './ContactList.styled';

const Btn = props => {
  const [isDel, setIsDel] = useState(false);
  const { onClick, id, nameBtn, userdata } = props;
  const { name, number } = { ...userdata };

  return (
    <RemoveBtn
      onClick={event => {
        if (nameBtn !== 'Edit') setIsDel(true);
        onClick(event, id);
      }}
      data-user-name={name}
      data-user-number={number}
    >
      {nameBtn} {isDel && <Loader width={15} />}
    </RemoveBtn>
  );
};
export default Btn;
