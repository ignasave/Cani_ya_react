import React from 'react';
import PropTypes from 'prop-types';

import Category from '@material-ui/icons/Category';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

import SearchComponent from '../../../sharedComponents/SearchComponent';

function NavigationOnInventory({ classes, setSearch }) {
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
                    <SearchComponent
                        title="producto"
                        setSearch={ setSearch }
                    />
                </Grid>
            </Grid>
        </div>
    );
}

NavigationOnInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationOnInventory);
