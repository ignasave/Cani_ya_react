import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const history = [
    {
        date: '18/12/2019',
        purchases: [
            {
                name: 'Capital',
                subsription: false,
                price: 35,
            },
            {
                name: 'Popular',
                subsription: false,
                price: 50,
            },
        ],
    },
    {
        date: '17/12/2019',
        purchases: [
            {
                name: 'Capital',
                subsription: false,
                price: 35,
            },
            {
                name: 'Cronista',
                subsription: true,
                price: 45,
            },
        ],
    },
    {
        date: '16/12/2019',
        purchases: [
            {
                name: 'Capital',
                subsription: true,
                price: 35,
            },
            {
                name: 'Popular',
                subsription: false,
                price: 50,
            },
        ],
    },
];

const ClientHistory = props => {
    const classes = useStyles();
    return (
        <>
            {history.map(item => (
                <div key={`day[${item.date}]`}>
                    <List
                        subheader={
                            <ListSubheader component='div'>
                                {item.date}
                            </ListSubheader>
                        }>
                        {item.purchases.map(element => (
                            <ListItem
                                className={classes.margin}
                                key={`item[${element.name}]`}>
                                <ListItemText
                                    primary={element.name}
                                    secondary={
                                        <>
                                            ${element.price} <br />
                                            {element.subsription && (
                                                <Typography
                                                    component='span'
                                                    variant='body2'>
                                                    Subscripcion
                                                </Typography>
                                            )}
                                        </>
                                    }
                                />
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </>
    );
};

ClientHistory.propTypes = {};

export default ClientHistory;
