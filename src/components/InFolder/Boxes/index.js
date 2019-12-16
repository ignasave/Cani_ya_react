import React from 'react';
import PropTypes from 'prop-types';

import { Divider } from '@material-ui/core';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

import Box from '../Box';
import { styles } from './styles';

const Boxes = ({ classes, boxes, section }) => {
    return (
        <List
            component='nav'
            subheader={
                <ListSubheader component='div' align='center'>
                    Historial de {section}
                </ListSubheader>
            }
            className={classes.root}>
            {boxes.map((element, index) => {
                return (
                    <div key={index}>
                        <Box
                            title={element.formatedDate}
                            childrens={element.childrens}
                        />
                        {index + 1 !== boxes.length && <Divider />}
                    </div>
                );
            })}
        </List>
    );
};

Boxes.propTypes = {
    classes: PropTypes.object.isRequired,
    boxes: PropTypes.array.isRequired,
};

export default withStyles(styles)(Boxes);
