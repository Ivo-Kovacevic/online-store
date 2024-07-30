import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import NumberInput from './NumberInput'

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function Product( { product } ) {

    return (
        <>
            <Grid item xs={3}>
                
                <Card>

                    <CardActionArea>
                        <CardMedia
                            component="img"
                            image={product.image}
                            alt=""
                        />

                        <CardContent sx={{ p: 1 }}>

                            <Typography variant='subtitle2' component='h1'>{capitalizeFirstLetter(product.brand)}</Typography>
                            <Typography variant='subtitle2' component='h2'>{product.model}</Typography>
                            <Typography variant='h4' component='h3'>{product.price}.99 €</Typography>

                        </CardContent>
                    </CardActionArea>

                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <NumberInput min={1}/>
                    </Box>

                    <CardActions>
                        <Button variant="contained" sx={{ width: '100%'}}>Add to cart</Button>
                    </CardActions>

                        
                </Card>

            </Grid>
        </>
    )
}

export default Product;