import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singUp } from 'components/redux/services/operations';

export default function SingUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      password,
    };

    dispatch(singUp(newUser));
  };
  return (
    <>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <h2>Registration</h2>
        <form onSubmit={onSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              required
              id="input-with-sx"
              label="Name"
              value={name}
              onChange={e => setName(e.target.value)}
              variant="standard"
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <AlternateEmailIcon
              sx={{ color: 'action.active', mr: 1, my: 0.5 }}
            />
            <TextField
              required
              id="input-with-sx"
              label="Email"
              variant="standard"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
            <TextField
              required
              id="input-with-sx"
              label="Password"
              variant="standard"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </Box>
          <Button sx={{ my: 2 }} variant="contained" type="submit">
            Sumbmit
          </Button>
        </form>{' '}
      </Box>
    </>
  );
}
