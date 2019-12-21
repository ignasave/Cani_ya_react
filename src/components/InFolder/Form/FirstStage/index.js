import React from 'react';
import Selector from '../../Selector';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import { DatePickerSetup } from '../../../../Utils/ConfigSetup';
import ErrorMessage from '../../../../sharedComponents/ErrorMessage';

import useForm from '../../../../hooks/FormHook';

const items = ['', 'Clarin', 'Palena', 'Nacion'];

const FirstStage = ({ classes, history, location }) => {

    const [ data, setData ] = useForm({ selectedDate: new Date(), provider: '' });

    const { state } = location;

    const { selectedDate, provider, showError } = data;

    const handleDateChange = date => {
        setData({ ...data, selectedDate: date });
    };

    const handleProviderChange = provider => {
        setData({ ...data, provider: provider });
    };

    const handleClick = () => {
        if(provider !== '') {
            history.push({ pathname:'/ingreso/menu', state: { date: data.date, provider, quantity: state.from === 'returns' } })
        } else {
            setData({ ...data, showError: true })
        }
    }

    return (
        <>
            <Grid
                container
                spacing={5}
                direction='column'
                justify='center'
                alignItems='center'
            >

                <ErrorMessage
                    errorMessage='Hubo un error al cargar los datos, por favor intente nuevamente'
                    open={showError}
                    handleClose={ () => setData({ ...data, showError: false }) }
                />

                <Grid item xs={12} className={classes.datePicker}>
                    <DatePicker
                        label='Fecha: '
                        value={selectedDate}
                        onChange={ handleDateChange }
                        views={DatePickerSetup.views}
                        variant='dialog'
                    />
                </Grid>

                <Grid item xs={12}>
                    <Selector
                        onChange={ handleProviderChange }
                        value={provider}
                        name='Proveedor'
                        items={items}
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.button}
                        onClick={ handleClick } >
                        Siguiente
                        <Send className={classes.rightIcon} />
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default withStyles(styles)(FirstStage);