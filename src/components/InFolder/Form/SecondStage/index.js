import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { styles } from './styles';

class SecondStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edition: 1,
            publicPrice: 0,
            buyPrice: 0,
            envy: 0,
            cuantity: 1,
            name: '',
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeStage = () => {
        const { name, edition } = this.state;
        if (name === '' || edition === 0) {
            this.setState({ showError: true });
        } else {
            this.props.changeStage({ stage: 'menu' });
        }
    };

    render() {
        const { classes } = this.props;
        const {
            name,
            edition,
            publicPrice,
            buyPrice,
            envy,
            cuantity,
        } = this.state;
        return (
            <Grid
                container
                spacing={1}
                direction='column'
                justify='center'
                alignItems='center'>
                <Grid item xs={12} className={classes.firstItem}>
                    <TextField
                        required
                        id='name'
                        label='Nombre'
                        placeholder='Nombre de publicacion'
                        value={name}
                        onChange={this.handleChange('name')}
                        className={classes.textField}
                        margin='normal'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        required
                        id='standard-number'
                        label='Edicion'
                        value={edition}
                        onChange={this.handleChange('edition')}
                        type='number'
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        margin='normal'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='code'
                        label='Codigo'
                        placeholder='012FJ10'
                        className={classes.textField}
                        margin='normal'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='outlined-adornment-amount'
                        margin='normal'
                        variant='outlined'
                        label='Precio Publico'
                        className={classes.textField}
                        value={publicPrice}
                        onChange={this.handleChange('publicPrice')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    $
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='outlined-adornment-amount'
                        margin='normal'
                        variant='outlined'
                        label='Precio Compra'
                        className={classes.textField}
                        value={buyPrice}
                        onChange={this.handleChange('buyPrice')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    $
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='outlined-adornment-amount'
                        margin='normal'
                        variant='outlined'
                        label='Envio'
                        className={classes.textField}
                        value={envy}
                        onChange={this.handleChange('envy')}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position='start'>
                                    $
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='standard-number'
                        label='Cantidad'
                        value={cuantity}
                        onChange={this.handleChange('cuantity')}
                        type='number'
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        margin='normal'
                    />
                </Grid>

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
                                Intente ingresar los datos nuevamente o reinicie
                                la aplicacion.
                            </Typography>
                        </Paper>
                    </Grid>
                ) : null}

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
        );
    }
}

SecondStage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SecondStage);
