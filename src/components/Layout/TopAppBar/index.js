import React from 'react';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

const TopAppBar = ({ classes, callBack, title, LRButton }) => {

    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color='inherit'
                        aria-label='Menu'
                        onClick={callBack}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant='h6'
                        color='inherit'
                        className={classes.grow}>
                        {title}
                    </Typography>
                    <Button color='inherit'>{LRButton}</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

TopAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    callBack: PropTypes.func,
    title: PropTypes.string,
    LRButton: PropTypes.string,
};

export default withStyles(styles)(TopAppBar);
