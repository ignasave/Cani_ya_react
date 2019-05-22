import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Send from '@material-ui/icons/Send';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    button: {
        margin: theme.spacing(1),
    },
    rightIcon: {
        marginLeft: theme.spacing(1),
    },
    firstItem: {
        marginTop: 40,
    },
    input: {
        display: 'none',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
});

class SecondStage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edition: 1,
            publicPrice: 0,
            buyPrice: 0,
            envy: 0,
            cuantity: 0,
        };
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleChangeStage = () => {
        this.props.changeStage({ stage: 'menu' });
    };

    render() {
        const { classes } = this.props;
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
                        placeholder='!HOLA'
                        className={classes.textField}
                        margin='normal'
                        variant='outlined'
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        id='standard-number'
                        label='Edicion'
                        value={this.state.edition}
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
                        value={this.state.publicPrice}
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
                        value={this.state.buyPrice}
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
                        label='Precio Publico'
                        className={classes.textField}
                        value={this.state.envy}
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
                        value={this.state.cuantity}
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
