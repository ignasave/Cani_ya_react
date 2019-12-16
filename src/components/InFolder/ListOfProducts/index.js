import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import Product from '../Product';
import { styles } from './styles';

const ListOfProducts = ({ classes, items, quantity = false }) => {
    return (
        <div>
            <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                    <List dense={false}>
                        {items.map((element, index) => {
                            return (
                                <Product
                                    key={index}
                                    element={element}
                                    quantity={quantity}
                                    classes={classes}
                                />
                            );
                        })}
                    </List>
                </div>
            </Grid>
        </div>
    );
};

ListOfProducts.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
};

export default withStyles(styles)(ListOfProducts);
