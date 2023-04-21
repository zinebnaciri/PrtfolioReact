import * as React from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Contact from './Contact';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white', // update the background color here
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={{color:'black', borderWidth:'1px', borderColor:'black', borderRadius: '15px', borderStyle: 'solid'}} onClick={handleOpen}>Contact Me</Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Contact/>
      </Modal>
    </div>
  );
}
