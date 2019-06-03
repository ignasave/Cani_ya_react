import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import Search from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import ListOfNewsPaper from '../ListOfNewsPaper';

function Magazines({ classes }) {
    const [date, setDate] = React.useState(new Date());
    const items = [
        { name: 'Gente', secondary: 'Ed: 315' },
        { name: 'Hola', secondary: 'Ed: 547' },
        { name: 'Caras', secondary: ' Ed: 123' },
    ];
    return (
        <Fragment>
            <Grid
                container
                direction='row'
                justify='center'
                alignItems='center'
                spacing={3}
                className={classes.grid}>
                <Grid item xs={2} className={classes.reduce}>
                    <Link to='/search'>
                        <IconButton color='secondary' aria-label='Search'>
                            <Search />
                        </IconButton>
                    </Link>
                </Grid>
                <Grid item xs={5}>
                    <DatePicker
                        label='Fecha: '
                        value={date}
                        onChange={newDate => setDate(newDate)}
                        views={['day', 'month', 'year']}
                        variant='dialog'
                    />
                </Grid>
            </Grid>
            <ListOfNewsPaper items={items} />
        </Fragment>
    );
}

Magazines.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Magazines);
