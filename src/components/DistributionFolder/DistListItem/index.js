import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import MoreVert  from '@material-ui/icons/MoreVert';

function DistListItem({ data }) {
    const [checked, setChecked] = useState(false);

    return (
        <ListItem ContainerComponent='ul' button onClick={() => setChecked(!checked)}>
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
