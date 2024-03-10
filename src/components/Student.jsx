import React from 'react';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiButton-root': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Student = () => {
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <div>
        <TextField
          label="Student Name"
          variant="outlined"
          fullWidth
          required
        />
      </div>
      <div>
        <TextField
          label="Student Address"
          variant="outlined"
          fullWidth
          required
        />
      </div>
      <div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Student;
