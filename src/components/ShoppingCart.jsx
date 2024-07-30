import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Typography } from '@mui/material';

export default function ShoppingCart( { shoppingCart } ) {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>

        <Typography variant='h5' component='h1' sx={{ m: 1 }}>Shopping cart</Typography>

        <Divider />
        
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>
        <ShoppingCartIcon></ShoppingCartIcon>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
