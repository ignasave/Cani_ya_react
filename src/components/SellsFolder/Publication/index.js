import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import Folder from '@material-ui/icons/Folder';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

function Publication({ classes, magazine }) {
    const [open, setOpen] = useState(false);

    const makeChildrens = items => {
        return items.map((element, index) => {
            return (
                <Collapse
                    in={open}
                    key={index}
                    timeout='auto'
                    unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary={`Edicion: ${element.edition}`}
                            secondary={`Fecha: ${element.date} Existencias:${element.existences}`} />
                        </ListItem>
                    </List>
                </Collapse>
            );
        });
    };

    return (
        <>
            <ListItem button onClick={() => setOpen(!open) }>
                <ListItemIcon>
                    <Folder />
                </ListItemIcon>
                <ListItemText
                    inset
                    className={classes.title}
                    primary={
                        <Typography
                            variant='h6'
                            className={
                                open ? classes.open : null
                            }
                            gutterBottom>
                            {magazine.name}
                        </Typography>
                    }
                    secondary={`Ediciones: ${magazine.editions.length}`}
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {makeChildrens(magazine.editions)}
        </>
    );
}

Publication.propTypes = {
    classes: PropTypes.object.isRequired,
    magazine: PropTypes.object.isRequired,
};

export default withStyles(styles)(Publication);
