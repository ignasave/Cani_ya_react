import React from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    Avatar,
    ListItemText,
    ListItemAvatar,
} from '@material-ui/core';

function PublicationSingleLine({ magazine }) {

    const avatarLink = 'https://picsum.photos/200/300'

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar alt='avatar' src={avatarLink} />
            </ListItemAvatar>
            <ListItemText primary={magazine.name} />
        </ListItem>
    );
}

PublicationSingleLine.propTypes = {};

export default PublicationSingleLine;
