import React, { Fragment, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import Add from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Remove from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

function generate(elements, quantity, classes) {
    return elements.map((element, index) => {
        return (
            <Product
                key={index}
                element={element}
                quantity={quantity}
                classes={classes}
            />
        );
    });
}

const Product = ({ element, quantity, classes }) => {
    const [count, setCount] = useState(0);

    const handleSetCount = value => {
        if (value) {
            value = Math.ceil(value);
            if (value < 0) value = 0;
            else if (value > 999) value = 999;
        }
        setCount(value);
    };

    return (
        <Fragment>
            <ListItem>
                <ListItemText
                    primary={element.name}
                    secondary={`Edicion: ${element.edition}, Cantidad: ${
                        element.quantity
                    }`}
                />
                <ListItemSecondaryAction>
                    {quantity ? (
                        <Fragment>
                            <IconButton
                                aria-label='Remove'
                                onClick={() => handleSetCount(count - 1)}>
                                <Remove />
                            </IconButton>
                            <TextField
                                id='standard-number'
                                type='number'
                                value={count}
                                onChange={e => handleSetCount(e.target.value)}
                                className={classes.numberField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin='normal'
                            />
                            <IconButton
                                aria-label='Add'
                                onClick={() => handleSetCount(count + 1)}>
                                <Add />
                            </IconButton>{' '}
                        </Fragment>
                    ) : (
                        <IconButton aria-label='Edit'>
                            <Edit />
                        </IconButton>
                    )}
                    <IconButton aria-label='Delete'>
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </Fragment>
    );
};

const ListOfProducts = ({ classes, items, quantity = false }) => {
    return (
        <div>
            <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                    <List dense={false}>
                        {generate(items, quantity, classes)}
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
