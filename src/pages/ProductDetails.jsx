import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Button, CardMedia, Container, Grid, Typography } from '@mui/material';
import NumberInput from '../components/NumberInput';

const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function ProductDetails( { addItemToCart } ) {
    const location = useLocation();
    const product = location.state.product;

    const [quantity, setQuantity] = useState(0)

    const handleChange = (event, value) => {
        setQuantity(prevValue => value);
    };

    return (
        <Container>
            <Grid container spacing={2} sx={{ my: 2 }}>
                <Grid item xs={6}>
                    <CardMedia
                        component="img"
                        image={product.image}
                        alt=""
                    />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant='h4' component='h1'>{capitalizeFirstLetter(product.brand)}</Typography>
                    <Typography variant='h3' component='h2'>{product.model}</Typography>
                    <Typography variant='subtitle2' component='h2'>{product.description}</Typography>
                    <Typography variant='h4' component='h3'>{product.price}.99 €</Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <NumberInput value={quantity} onChange={handleChange} min={1}/>
                        <Button onClick={() => addItemToCart(product, quantity)} variant="contained" sx={{ my: 1}}>Add to cart</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default ProductDetails;
