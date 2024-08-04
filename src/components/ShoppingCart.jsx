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
import { CardMedia, Typography } from '@mui/material';
import { Clear } from '@mui/icons-material';

const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export default function ShoppingCart( { shoppingCart, removeItemFromCart } ) {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const ShoppingCartList = (
    <Box sx={{ width: 500 }} role="presentation">

        <Typography variant='h3' component='h1' sx={{ m: 4 }}>Shopping cart</Typography>

        <Divider />
        
        <List>
          {shoppingCart.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ alignItems: 'stretch' }}>

              <ListItemButton sx={{ flexGrow: 1 }}>
                <Box component='img' src={item.image} sx={{ width: 150 }} />
                <ListItemText sx={{ p: 1 }}>
                  <Typography>{capitalizeFirstLetter(item.brand)}</Typography>
                  <Typography>{item.model}</Typography>
                  <Typography variant='h6'>{item.price}.99 €</Typography>
                  <Typography>Quantity: {item.quantity}</Typography>
                </ListItemText>
              </ListItemButton>

              <Button onClick={() => removeItemFromCart(item)}>
                <Clear></Clear>Remove
              </Button>

            </ListItem>
          ))}
        </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>
        <ShoppingCartIcon></ShoppingCartIcon>
        <Typography sx={{ color: 'white'}}>{shoppingCart.length} items</Typography>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {ShoppingCartList}
      </Drawer>
    </div>
  );
}
