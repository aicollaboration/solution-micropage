import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import { supabase } from '../../supabaseClient'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';


export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            <Link to="/">
              Hi TOBI
            </Link>
          </Typography>






          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Link to="/home">
                Home
              </Link>

              <Link to="Solutions"
              >Solutions
              </Link>

          </Box>


          <Button color="inherit"
            onClick={() => supabase.auth.signOut()}>
            Log out
          </Button>

        </Toolbar>
      </AppBar>
    </Box>
  )
}
