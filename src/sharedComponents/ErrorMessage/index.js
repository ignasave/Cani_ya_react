import React from 'react';
import PropTypes from 'prop-types'

import Snackbar from '@material-ui/core/Snackbar';

import MySnackbarContentWrapper from '../SnackBarContentWrapperarContentWrapper'

function ErrorMessage({ errorMessage, open, handleClose }) {
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}>
                <MySnackbarContentWrapper
                    onClose={handleClose}
                    variant='error'
                    message={errorMessage}
                />
            </Snackbar>
        </div>
    );
}

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string,
    open: PropTypes.bool,
    handleClose: PropTypes.func,
}

export default ErrorMessage;
