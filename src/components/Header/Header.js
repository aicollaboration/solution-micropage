import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../supabaseClient';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/home">
              Dashboard
            </Link>
          </Typography>
          <MenuItem>
            <Link to="/solutions">Solutions</Link>
          </MenuItem>
          <MenuItem>
            <Button color="inherit"
              onClick={() => supabase.auth.signOut()}>
              Log out
            </Button>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
