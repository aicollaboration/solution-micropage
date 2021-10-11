import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import Avatar from '@mui/material/Avatar';



import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function SolutionBox({ item }) {
  return (
    <Item>

      {/* <Paper sx={{ maxWidth: 400, my: 1, mx: 'auto', p: 2 }}> */}
      <Grid container wrap="nowrap" spacing={2}>
        <Grid item>
          <Avatar> {item.id}</Avatar>
        </Grid>
        <Grid item xs>
          <Typography variant="h5" component="div">
            {item.service ? item.service.name : "Not Availiable"}
          </Typography>
          <Typography> {item.solution ? item.solution.name : ""}</Typography>
        </Grid>
      </Grid>
      {/* </Paper> */}

    </Item>

  )
}
