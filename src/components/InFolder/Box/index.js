import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import { styles } from './styles';

const Box = ({ title, childrens, classes }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);

    return (
        <>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <InboxIcon />
                </ListItemIcon>
                <ListItemText
                    inset
                    className={classes.title}
                    primary={
                        <Typography
                            variant='h6'
                            className={open ? classes.open : null}
                            gutterBottom>
                            {title}
                        </Typography>
                    }
                />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            {childrens.map((element, index) => {
                return (
                    <Collapse
                        in={open}
                        key={index}
                        timeout='auto'
                        unmountOnExit>
                        <List component='div' disablePadding>
                            <ListItem button className={classes.nested}>
                                <ListItemIcon>{element.icon}</ListItemIcon>
                                <ListItemText primary={element.provider} />
                            </ListItem>
                        </List>
                    </Collapse>
                );
            })}
        </>
    );
};

Box.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    childrens: PropTypes.array.isRequired,
};

export default withStyles(styles)(Box);
