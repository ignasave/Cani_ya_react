import React from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';

import useStyles from './styles';

const ClientList = ({ clients }) => {
    const classes = useStyles();
    return (
        <>
            {clients && clients.length >= 0 ? (
                <List>
                    {clients.map((item, index) => {
                        return (
                            <div key={`user[${index}]`}>
                                <ListItem button>
                                    <ListItemText
                                        primaryTypographyProps={{
                                            variant: 'h6',
                                        }}
                                        primary={item.name}
                                    />
                                </ListItem>
                                {index !== clients.length - 1 && <Divider />}
                            </div>
                        );
                    })}
                </List>
            ) : (
                <div className={classes.flex}>
                    <Typography variant='h5' className={classes.margin}>
                        There is no clients!
                    </Typography>
                </div>
            )}
        </>
    );
};

ClientList.propTypes = {};

export default ClientList;
