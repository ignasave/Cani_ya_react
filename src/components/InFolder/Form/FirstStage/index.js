import React, { Component } from 'react';
import Selector from '../../Selector';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './styles';
import CustomizedSnackbars from '../../../ErrorMessage/NewError';
import { DatePickerSetup } from '../../../../Utils/ConfigSetup';

/* CONSTANTE DE MUESTRA */ const items = ['', 'Clarin', 'Palena', 'Nacion'];

class FirstStage extends Component {
    state = {
        selectedDate: new Date(),
        provider: '',
        showError: false,
        name: 'Proveedor',
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    handleProviderChange = provider => {
        this.setState({ provider: provider });
    };

    handleChangeStage = () => {
        const { selectedDate, provider } = this.state;
        if (selectedDate && provider !== '') {
            const transformedDate = `${selectedDate.getDate()}-${selectedDate.getMonth()}-${selectedDate.getFullYear()}`;

            this.props.changeStage({
                stage: 'menu',
                date: transformedDate,
                provider: provider,
            });
        } else {
            this.setState({ showError: true });
        }
    };

    handleCloseError = () => {
        this.setState({ showError: false });
    };

    render() {
        const { classes } = this.props;
        const { showError, selectedDate, provider, name } = this.state;

        return (
            <div>
                <Grid
                    container
                    spacing={5}
                    direction='column'
                    justify='center'
                    alignItems='center'>
                    <CustomizedSnackbars
                        errorMessage='Hubo un error al cargar los datos, por favor intente nuevamente'
                        open={showError}
                        handleClose={this.handleCloseError}
                    />

                    <Grid item xs={12} className={classes.datePicker}>
                        <DatePicker
                            label='Fecha: '
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            views={DatePickerSetup.views}
                            variant='dialog'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Selector
                            onChange={this.handleProviderChange}
                            value={provider}
                            name={name}
                            items={items}
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Button
                            variant='contained'
                            color='primary'
                            className={classes.button}
                            onClick={this.handleChangeStage}>
                            Siguiente
                            <Send className={classes.rightIcon} />
                        </Button>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

FirstStage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(FirstStage);
