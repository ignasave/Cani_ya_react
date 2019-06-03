import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import React from 'react';
import { RoutesConfig } from '../RouteSetup';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';

const MakeList = classes => {
    return RoutesConfig.map((item, index) => (
        <SideLink item={item} key={index} classes={classes} />
    ));
};

const SideLink = ({ item, classes }) => {
    return (
        <Link to={item.route} className={classes.link}>
            <ListItem button>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.name} />
            </ListItem>
        </Link>
    );
};

function SideList({ classes }) {
    return (
        <div>
            <List>{MakeList(classes)}</List>
            <Divider />
        </div>
    );
}

export default withStyles(styles)(SideList);
