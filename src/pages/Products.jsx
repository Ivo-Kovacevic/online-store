import { Container, Grid } from '@mui/material';
import Product from '../components/Product';


function Products( { products } ) {

  console.log(products);



  return (
    <>
      <Container sx={{width: 900}}>

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
