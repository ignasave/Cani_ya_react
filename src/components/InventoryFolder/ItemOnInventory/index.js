import React from 'react';
import PropTypes from 'prop-types';

import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider  from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

function ItemOnInventory({ classes, name, existencies, price, image }) {
    return (
        <>
            <div className={classes.container}>
                <Grid container>
                    <Grid item xs={3}>
                        <ButtonBase className={classes.image}>
                            <img
                                alt='Remy Sharp'
                                src={image}
                                className={classes.img}
                            />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={9} container>
                        <Grid item xs container direction='column' spacing={0}>
                            <Grid item xs>
                                <Typography variant='subtitle1'>
                                    {name}
                                </Typography>
                                <Typography color='textSecondary'>
                                    Existencias: {existencies}
                                </Typography>
                                <Typography color='textSecondary'>
                                    Precio: ${price}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Divider />
        </>
    );
}

ItemOnInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemOnInventory);
