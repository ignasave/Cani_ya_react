import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Folder from '@material-ui/icons/Folder';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

function Publication({ classes, magazine }) {
    const [open, setOpen] = React.useState(false);

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
        <Fragment>
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
        </Fragment>
    );
}

Publication.propTypes = {
    classes: PropTypes.object.isRequired,
    magazine: PropTypes.object.isRequired,
};

export default withStyles(styles)(Publication);
