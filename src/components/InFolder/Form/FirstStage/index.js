import React, { Component } from 'react';
import Selector from '../../Selector';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { styles } from './styles';

class FirstStage extends Component {
    state = {
        selectedDate: new Date(),
        provider: '',
        showError: false,
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

    render() {
        const { classes } = this.props;
        const { showError, selectedDate, provider } = this.state;
        return (
            <div>
                <Grid
                    container
                    spacing={5}
                    direction='column'
                    justify='center'
                    alignItems='center'>
                    {showError ? (
                        <Grid item xs={12} className={classes.datePicker}>
                            <Paper elevation={1} className={classes.paper}>
                                <Typography
                                    variant='h6'
                                    className={classes.error}
                                    component='h3'>
                                    ¡Hubo un error!
                                </Typography>
                                <Typography component='p'>
                                    Intente ingresar los datos nuevamente o
                                    reinicie la aplicacion.
                                </Typography>
                            </Paper>
                        </Grid>
                    ) : null}

                    <Grid item xs={12} className={classes.datePicker}>
                        <DatePicker
                            label='Fecha: '
                            value={selectedDate}
                            onChange={this.handleDateChange}
                            views={['day', 'month', 'year']}
                            variant='dialog'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Selector
                            onChange={this.handleProviderChange}
                            value={provider}
                            name='Proveedor'
                            items={['', 'Clarin', 'Palena', 'Nacion']}
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
