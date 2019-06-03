import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import ItemOnInventory from '../ItemOnInventory';

const makeItems = items => {
    return items.map((element, index) => {
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
    });
};
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
const ListOfItems = props => {
    return (
        <Grid
            container
            direction='row'
            justify='center'
            alignItems='center'
            spacing={2}>
            {makeItems(items)}
        </Grid>
    );
};

export default ListOfItems;
