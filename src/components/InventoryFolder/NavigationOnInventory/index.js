import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Category from '@material-ui/icons/Category';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { styles } from './styles';

function NavigationOnInventory({ classes }) {
    return (
        <Paper elevation={2} className={classes.margin}>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'>
                <Grid item xs={2}>
                    <IconButton className={classes.margin} aria-label='Delete'>
                        <Category />
                    </IconButton>
                </Grid>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor='search product'>
                            Buscar un producto
                        </InputLabel>
                        <Input
                            id='search_product'
                            startAdornment={
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </Paper>
    );
}

NavigationOnInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationOnInventory);
