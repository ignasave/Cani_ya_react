import React from 'react';

import Grid from '@material-ui/core/Grid';

import ItemOnInventory from '../ItemOnInventory';

const ListOfItems = ({ items }) => {
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
