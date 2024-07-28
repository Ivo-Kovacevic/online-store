import { Link } from 'react-router-dom'
import { styled, Typography } from '@mui/material';

const BackgroundImage = styled('div') ({
  backgroundImage: 'url(/images/background.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  width: '100vw',
})

function Home() {

  return (
    <>
      <BackgroundImage>
        <Typography variant='h1' align='center'
          sx={ {
            color: 'white',
            backdropFilter: 'blur(10px)',
            height: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',  
          } }>
            Classy wear
        </Typography>
      </BackgroundImage>
    </>
  )
}

export default Home;
