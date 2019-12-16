import React from 'react';

import Grid from '@material-ui/core/Grid';

import ItemOnInventory from '../ItemOnInventory';

const items = [
    {
        name: '!HOLA',
        existencies: 3,
        price: 124,
        image: 'https://picsum.photos/80',
    },
    {
        name: 'CARAS',
        existencies: 6,
        price: 133,
        image: 'https://picsum.photos/80',
    },
    {
        name: 'GENTE',
        existencies: 1,
        price: 67,
        image: 'https://picsum.photos/80',
    },
];

const ListOfItems = () => {
    return (
        <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={2}>
            {items.map((element, index) => {
                return (
                    <Grid item xs={12} key={index}>
                        <ItemOnInventory
                            name={element.name}
                            existencies={element.existencies}
                            price={element.price}
                            image={element.image}
                        />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ListOfItems;
