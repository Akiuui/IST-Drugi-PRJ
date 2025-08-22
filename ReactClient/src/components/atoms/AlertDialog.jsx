import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';

function AlertDialog({ open, onClose, message, subject }) {
  return (

    <Dialog open={open} onClose={onClose}>

      <DialogTitle>{subject}</DialogTitle>

      <DialogContent>
        <Typography>{message}</Typography>
      </DialogContent>

      <DialogActions>

        <Button onClick={onClose} variant="contained" autoFocus>
          OK
        </Button>

      </DialogActions>
    </Dialog>
  )
}


export default AlertDialog