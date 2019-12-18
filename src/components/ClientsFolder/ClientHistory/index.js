import React from 'react';
import PropTypes from 'prop-types';
import {
    List,
    ListSubheader,
    ListItem,
    ListItemText,
    Typography,
    Divider
} from '@material-ui/core';

import useStyles from './styles'

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
    const classes = useStyles()
    return (
        <>
            {history.map((item, index) => (
                <>
                <List
                    subheader={
                        <ListSubheader component='div'>
                            {item.date}
                        </ListSubheader>
                    }>
                    {item.purchases.map((element, eIndex) => (
                        <ListItem className={classes.margin}>
                            <ListItemText
                                primary={element.name}
                                secondary={
                                    <>
                                        ${element.price} <br />
                                        {element.subsription && (
                                            <Typography
                                                component='p'
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
                {history.length !== index - 1 && <Divider/>}
                </>
            ))}
        </>
    );
};

ClientHistory.propTypes = {};

export default ClientHistory;
