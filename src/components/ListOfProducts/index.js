import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import { Divider } from '@material-ui/core';
import PropTypes from 'prop-types';
import { styles } from './styles';

function generate(elements) {
    return elements.map((element, index) => {
        return (
            <Fragment key={index}>
                <ListItem>
                    <ListItemText
                        primary={element.name}
                        secondary={`Edicion: ${element.edition}, Cantidad: ${
                            element.quantity
                        }`}
                    />
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Edit'>
                            <Edit />
                        </IconButton>
                        <IconButton aria-label='Delete'>
                            <DeleteIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                {index + 1 !== elements.length ? <Divider /> : null}
            </Fragment>
        );
    });
}

const ListOfProducts = ({ classes, items }) => {
    return (
        <div>
            <Grid item xs={12} md={6}>
                <div className={classes.demo}>
                    <List dense={false}>{generate(items)}</List>
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
