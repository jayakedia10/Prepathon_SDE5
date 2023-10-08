import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useHistory } from 'react-router-dom';
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx = {{ background: "rgb(67, 67, 136)" }} >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trip Maker
          </Typography>
          <div style={{paddingLeft:'20px'}}>
          <Button color="inherit" onClick={event =>  window.location.href='/addtrip'}>Add Trip</Button>
          <Button color="inherit" onClick={event =>  window.location.href='/community/1'}>Community</Button>
          <Button color="inherit" onClick={event =>  window.location.href='/trip/1'}>My Trip</Button>
          <Button color="inherit" onClick={event =>  window.location.href='/profile/1'}>Profile</Button>
          <Button color="inherit" onClick={event =>  window.location.href='/login'}>Login</Button>
          <Button color="inherit">Logout</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}