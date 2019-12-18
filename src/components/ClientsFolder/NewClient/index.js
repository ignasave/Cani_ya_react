import React from 'react';
import PropTypes from 'prop-types';

import Check from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import useStyles from './styles';

const NewClient = props => {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                spacing={3}>
                <Grid item xs className={classes.margin}>
                    <TextField
                        error={false}
                        helperText=''
                        id='name'
                        label='Nombre'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        error={false}
                        helperText=''
                        id='telephone'
                        label='Telefono'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        error={false}
                        helperText=''
                        id='address'
                        label='Direccion'
                        variant='outlined'
                    />
                </Grid>
                <Grid item xs>
                    <TextField
                        error={false}
                        helperText=''
                        className={classes.note}
                        id='note'
                        label='Nota'
                        multiline
                        variant='outlined'
                    />
                </Grid>
            </Grid>

            <FloatingActionButton
                icon={<Check />}
                aria='Registra un usuario'
                tooltip='Registra un nuevo usuario'
                clickHandler={() => {}}
            />
        </>
    );
};

NewClient.propTypes = {};

export default NewClient;
