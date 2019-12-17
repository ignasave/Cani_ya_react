import React from 'react';
import PropTypes from 'prop-types';

import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

const FloatingActionButton = ({
    classes,
    color = 'secondary',
    icon,
    aria,
    tooltip,
    clickHandler,
    position = 'corner',
}) => (
    <Tooltip title={tooltip} placement='left'>
        <Fab
            onClick={clickHandler}
            color={color}
            aria-label={aria}
            className={position === 'corner' && classes.fab}>
            {icon}
        </Fab>
    </Tooltip>
);

FloatingActionButton.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string,
    icon: PropTypes.element,
    aria: PropTypes.string,
    tooltip: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(FloatingActionButton);
