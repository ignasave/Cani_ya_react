import React, { Component } from 'react';
import Selector from '../Selector';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { DatePicker } from '@material-ui/pickers';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    datePicker: {
        marginTop: 10,
    },
    error: {
        color: '#b2102f',
    },
    paper: {
        textAlign: 'center',
        padding : theme.spacing(2)
    },
});

class FirstStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: new Date(),
            provider: '',
            showError: false,
        };
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date });
    };

    handleProviderChange = provider => {
        this.setState({ provider: provider });
    };

    handleChangeStage = () => {
        if (this.state.selectedDate && this.state.provider !== '') {
            const transformedDate = `${this.state.selectedDate.getDate()}-${this.state.selectedDate.getMonth()}-${this.state.selectedDate.getFullYear()}`;

            this.props.changeStage({
                stage: 'menu',
                date: transformedDate,
                provider: this.state.provider,
            });
        } else {
            this.setState({ showError: true });
        }
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Grid
                    container
                    spacing={5}
                    direction='column'
                    justify='center'
                    alignItems='center'>
                    {this.state.showError ? (
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
                            value={this.state.selectedDate}
                            onChange={this.handleDateChange}
                            views={['day', 'month', 'year']}
                            variant='dialog'
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <Selector
                            onChange={this.handleProviderChange}
                            value={this.state.provider}
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
}
export default withStyles(styles)(FirstStage);
