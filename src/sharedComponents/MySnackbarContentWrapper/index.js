import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import WarningIcon from '@material-ui/icons/Warning';

import { useStyles } from './styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

function MySnackbarContentWrapper({
    className,
    message,
    onClose,
    variant,
    ...other
}) {
    const classes = useStyles();
    const Icon = variantIcon[variant];

    return (
        <SnackbarContent
            className={classNames(classes[variant], className)}
            aria-describedby='client-snackbar'
            message={
                <span id='client-snackbar' className={classes.message}>
                    <Icon
                        className={classNames(
                            classes.icon,
                            classes.iconVariant
                        )}
                    />
                    {message}
                </span>
            }
            action={[
                <IconButton
                    key='close'
                    aria-label='Close'
                    color='inherit'
                    className={classes.close}
                    onClick={onClose}>
                    <CloseIcon className={classes.icon} />
                </IconButton>,
            ]}
            {...other}
        />
    );
}

MySnackbarContentWrapper.propTypes = {
    className: PropTypes.string,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf(['success', 'warning', 'error', 'info'])
        .isRequired,
};

export default MySnackbarContentWrapper;
