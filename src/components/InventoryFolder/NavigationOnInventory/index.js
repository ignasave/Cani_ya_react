import React from 'react';
import PropTypes from 'prop-types';

import Category from '@material-ui/icons/Category';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

function NavigationOnInventory({ classes }) {
    const icon = 'fas fa-barcode';
    return (
        <div className={classes.margin}>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'>
                <Grid item xs={2}>
                    <IconButton
                        className={classes.margin}
                        aria-label='Category'>
                        <Category />
                    </IconButton>
                </Grid>
                <Grid item xs={2}>
                    <IconButton className={classes.margin} aria-label='Delete'>
                        <i className={icon} />
                    </IconButton>
                </Grid>
                <Grid item xs={8}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor='search_product'>
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
        </div>
    );
}

NavigationOnInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationOnInventory);
