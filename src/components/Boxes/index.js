import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Box from '../Box';
import { Divider } from '@material-ui/core';
import { styles } from './styles';

const makeBoxes = items => {
    return items.map((element, index) => {
        return (
            <Fragment key={index}>
                <Box
                    title={element.formatedDate}
                    childrens={element.childrens}
                />
                { index + 1 !== items.length ? <Divider /> : null }
            </Fragment>
        );
    });
};

const Boxes = props => {
    const { classes, boxes } = props;
    return (
        <List
            component='nav'
            subheader={
                <ListSubheader component='div' align='center'>
                    Historial de cajas
                </ListSubheader>
            }
            className={classes.root}>
            {makeBoxes(boxes)}
        </List>
    );
};

Boxes.propTypes = {
    classes: PropTypes.object.isRequired,
    boxes: PropTypes.array.isRequired,
};

export default withStyles(styles)(Boxes);
