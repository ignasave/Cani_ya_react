import React, { useState } from 'react'

import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Remove from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';

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
        <>
            <ListItem>
                <ListItemText
                    primary={element.name}
                    secondary={`Edicion: ${element.edition}, Cantidad: ${
                        element.quantity
                    }`}
                />
                <ListItemSecondaryAction>
                    {quantity ? (
                        <>
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
                        </>
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
        </>
    );
};

export default Product