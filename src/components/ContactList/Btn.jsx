import Loader from 'components/Loader/Loader';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';

const Btn = props => {
  const [isDel, setIsDel] = useState(false);
  const { onClick, id, nameBtn, userdata } = props;
  const { name, number } = { ...userdata };
  const btnDel = (
    <Button
      variant="outlined"
      startIcon={<DeleteIcon />}
      onClick={event => {
        setIsDel(true);
        onClick(event, id);
      }}
      size="small"
    >
      {nameBtn} {isDel && <Loader width={15} />}
    </Button>
  );
  const btnEdit = (
    <Button
      size="small"
      variant="contained"
      endIcon={<EditIcon />}
      onClick={event => {
        onClick(event, id);
      }}
      data-user-name={name}
      data-user-number={number}
    >
      {nameBtn}
    </Button>
  );

  return (
    <Box sx={{ '& button': { m: 0.5 } }}>
      {' '}
      {nameBtn !== 'Edit' ? btnDel : btnEdit}
    </Box>
  );

  // return (
  //   <RemoveBtn
  //     onClick={event => {
  //       if (nameBtn !== 'Edit') setIsDel(true);
  //       onClick(event, id);
  //     }}
  //     data-user-name={name}
  //     data-user-number={number}
  //   >
  //     {nameBtn} {isDel && <Loader width={15} />}
  //   </RemoveBtn>
  // );
};
export default Btn;
