import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'


function Navbar( { shoppingCart } ) {

  return (
    <>
      <AppBar position="static">

        <Container>

          <Toolbar>

            <Typography variant='h4' sx={{ flexGrow: 1 }}>OnlineShop</Typography>

            <Stack direction='row' alignItems='center' spacing={2}>

              <Button component={RouterLink} to="/" sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>
                Home
              </Button>

              <Button component={RouterLink} to="/products" sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>
                Products
              </Button>

              <ShoppingCart shoppingCart={ shoppingCart }></ShoppingCart>

            </Stack>

          </Toolbar>

        </Container>

      </AppBar>
    </>
  )
}

export default Navbar;
