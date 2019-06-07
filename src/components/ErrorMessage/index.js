import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { styles } from './styles';

function ErrorMessage({ classes }) {
    return (
        <Paper elevation={1} className={classes.paper}>
            <Typography variant='h6' className={classes.error} component='h3'>
                ¡Hubo un error!
            </Typography>
            <Typography component='p'>
                Intente ingresar los datos nuevamente o reinicie la aplicacion.
            </Typography>
        </Paper>
    );
}

ErrorMessage.propTypes = {};

export default ErrorMessage;
