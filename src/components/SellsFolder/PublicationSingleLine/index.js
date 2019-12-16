import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'

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

PublicationSingleLine.propTypes = {
    magazine: PropTypes.object.isRequired
};

export default PublicationSingleLine;
