import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Drawer from '@mui/joy/Drawer';
import DialogTitle from '@mui/joy/DialogTitle';
import ModalClose from '@mui/joy/ModalClose';
import EllipsisList from './list'

export default function DrawerCloseButton({open,setOpen}) {
  // const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: 'flex' }}>
      
      <Drawer open={open} anchor='right' onClose={() => setOpen(false)}>
        <ModalClose />
        <DialogTitle>
            < EllipsisList />
        </DialogTitle>
      </Drawer>
    </Box>
  );
}
