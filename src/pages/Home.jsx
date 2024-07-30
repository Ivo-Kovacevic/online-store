import { Link } from 'react-router-dom'
import { Button, Drawer, styled, Typography } from '@mui/material';
import ShoppingCart from '../components/ShoppingCart';

const BackgroundImage = styled('div') ({
  backgroundImage: 'url(/images/background.avif)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  display: 'flex',
  alignItems: 'center'
})

function Home() {

  return (
    <>
      <BackgroundImage>
        <Typography variant='h1' sx={{
          color: 'white',
          bgcolor: '#0000008f',
          py: 2,
          px: 12
        }}>
            Tech devices
            <br />
            for all your problems
        </Typography>
      </BackgroundImage>
    </>
  )
}

export default Home;
