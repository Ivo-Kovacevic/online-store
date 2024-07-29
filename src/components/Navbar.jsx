import { AppBar, Button, Container, Stack, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'


function Navbar() {

  return (
    <>
      <AppBar position="static">

        <Toolbar>

          <Typography variant='h4' sx={{ flexGrow: 1 }}>OnlineShop</Typography>

          <Stack direction='row'>
            <Link to='/'>
              <Button sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>Home</Button>
            </Link>
            <Link to='/products'>
              <Button sx={ { color: 'white', ':hover': { bgcolor: '#455a64' } } }>Products</Button>
            </Link>
          </Stack>

        </Toolbar>

      </AppBar>
    </>
  )
}

export default Navbar;
