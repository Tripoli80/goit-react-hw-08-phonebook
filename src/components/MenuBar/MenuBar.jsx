import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth } from 'components/redux/selectors';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { logOut } from 'components/redux/services/operations';
import { useUserName } from 'hooks/hooks';

export default function MenuBar() {
  const auth = useSelector(getAuth);
  const name = useUserName();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const goToBook = () => {
    setAnchorEl(null);
    navigate('/');
  };

  const hendlelogOut = () => {
    dispatch(logOut());
    setAnchorEl(null);
    navigate('/sigin');
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { md: 'flex' } }}>
            <Button
              sx={{ my: 2, color: 'white', display: 'block' }}
              onClick={() => {
                navigate('/');
              }}
            >
              {'HOME'}
            </Button>
          </Box>
          {!auth && (
            <>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => {
                  navigate('/sigin');
                }}
              >
                {'sigin'}
              </Button>
              <Button
                sx={{ my: 2, color: 'white', display: 'block' }}
                onClick={() => {
                  navigate('/sigup');
                }}
              >
                {'sigup'}
              </Button>{' '}
            </>
          )}

          {auth && (
            <div> <Button sx={{ my: 2, color: 'white', display: '' }}>
                  {`HELLO ${name}`}
                </Button>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
               
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={goToBook}>My Book Contact</MenuItem>
                <MenuItem onClick={hendlelogOut}>LogOut</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
