import React from 'react';
import MySnackbarContentWrapper from '../../SnackBar'
import Snackbar from '@material-ui/core/Snackbar';

function CustomizedSnackbars({ errorMessage, open, handleClose }) {
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

export default CustomizedSnackbars;
