import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { styles } from './styles';
import { Divider } from '@material-ui/core';

function ItemOnInventory({ classes, name, existencies, price, image }) {
    return (
        <div className={classes.container}>
            <Grid container >
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
                    <Grid item xs container direction='column' >
                        <Grid item xs>
                            <Typography gutterBottom variant='subtitle1'>
                                {name}
                            </Typography>
                            <Typography gutterBottom>
                                Existencias: {existencies}
                            </Typography>
                            <Typography color='textSecondary'>
                                Precio: ${price}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography style={{ cursor: 'pointer' }}>
                                Edit
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
        </div>
    );
}

ItemOnInventory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ItemOnInventory);
