import { Container, Grid } from '@mui/material';
import Product from '../components/Product';


function Products( { products } ) {



  return (
    <>
      <Container>

        <Grid container spacing={2} alignItems="stretch" sx={{ my: 2 }}>

          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}

        </Grid>

      </Container>
    </>
  )
}

export default Products;
