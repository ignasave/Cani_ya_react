import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    ListItem,
    ListItemIcon,
    Checkbox,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from '@material-ui/core';
import { MoreVert } from '@material-ui/icons/';

function DistListItem({ data }) {
    const [checked, setChecked] = useState(false);

    return (
        <ListItem button onClick={() => setChecked(!checked)}>
            <ListItemIcon>
                <Checkbox
                    edge='start'
                    checked={checked}
                    tabIndex={-1}
                    disableRipple
                />
            </ListItemIcon>
            <ListItemText
                primary={data.publication}
                secondary={`${data.direction}, ${data.helper}`}
            />
            <ListItemSecondaryAction>
                <IconButton>
                    <MoreVert />
                </IconButton>
            </ListItemSecondaryAction>
        </ListItem>
    );
}

DistListItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default DistListItem;
