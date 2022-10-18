import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { singIn } from 'components/redux/services/operations';

export default function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };

    dispatch(singIn(user));
  };
  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <h2>Log In</h2>
      <form action="submit" onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AlternateEmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
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
        
          <Button sx={{ my: 2 }} variant="contained" type="submit" >
            Увійти
          </Button>
      
      </form>
    </Box>
  );
}
