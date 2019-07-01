import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import React from 'react';
import { RoutesConfig } from '../../RouteSetup';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import PropTypes from 'prop-types';

const MakeList = classes => {
    return RoutesConfig.map((item, index) =>
        item.inLayout ? (
            <SideLink item={item} key={index} classes={classes} />
        ) : null
    );
};

MakeList.propTypes = {
    classes: PropTypes.object.isRequired,
};

const SideLink = ({ item, classes }) => {
    return (
        <NavLink to={item.route} activeClassName={classes.active} className={classes.link}>
            <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
        </NavLink>
    );
};

SideLink.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

function SideList({ classes }) {
    return (
        <div>
            <List>{MakeList(classes)}</List>
            <Divider />
        </div>
    );
}

SideList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideList);
