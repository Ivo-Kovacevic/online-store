import { Container, Grid } from '@mui/material';
import Product from '../components/Product';


function Products( { products, addItemToCart } ) {



  return (
    <>
      <Container>

        <Grid container spacing={2} alignItems="stretch" sx={{ my: 2 }}>

          {products.map((product, index) => (
            <Product product={product} addItemToCart={addItemToCart} key={index} />
          ))}

        </Grid>

      </Container>
    </>
  )
}

export default Products;
