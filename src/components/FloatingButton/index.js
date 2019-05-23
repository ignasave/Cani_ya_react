import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import { styles } from './styles'

const FloatingActionButtons = props => {
    const { classes, color, icon, aria, tooltip, clickHandler } = props;
    return (
        <Tooltip title={tooltip} placement='left'>
            <Fab
                onClick={clickHandler}
                color={color}
                aria-label={aria}
                className={classes.fab}>
                {icon}
            </Fab>
        </Tooltip>
    );
};

FloatingActionButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.element,
    aria: PropTypes.string,
    tooltip: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
};

export default withStyles(styles)(FloatingActionButtons);
