import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { ReducerContext } from "../../../App"


export default function FormDialog() {
  const { state, dispatch } = useContext(ReducerContext);
  console.log('state', state)
  const {
    open,
    title,
    bodyComponent: BodyComponent,
  } = state;

  const handleClose = () => {
    dispatch({
      type: 'HIDE_DIALOG',
    });
  };

  return (
    <div style={{ border: '1px solid red'}}>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          {BodyComponent ? <BodyComponent /> : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}