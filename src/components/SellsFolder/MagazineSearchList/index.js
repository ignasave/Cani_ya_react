import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Search from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import { Divider } from '@material-ui/core';
import Publication from '../Publication';
import ListSubheader from '@material-ui/core/ListSubheader';

function MagazineSeachList({ classes }) {
    const [search, setSearch] = React.useState('');

    const items = [
        {
            name: 'Hola',
            editions: [
                { date: '03/06/19', edition: 13, existences: 3 },
                { date: '10/06/19', edition: 14, existences: 3 },
            ],
        },
        {
            name: 'Caras',
            editions: [
                { date: '03/06/19', edition: 13, existences: 3 },
                { date: '10/06/19', edition: 14, existences: 3 },
            ],
        },
        {
            name: 'Gente',
            editions: [
                { date: '03/06/19', edition: 13, existences: 3 },
                { date: '10/06/19', edition: 14, existences: 3 },
            ],
        },
    ];

    let filteredMagazines = items.filter(magazine => {
        return magazine.name.toLowerCase().indexOf(search) !== -1;
    });

    const makeMagazines = () => {
        return filteredMagazines.map((magazine, index) => {
            return (
                <Fragment key={index}>
                    <Publication magazine={magazine} />
                    {index + 1 !== items.length ? <Divider /> : null}
                </Fragment>
            );
        });
    };

    return (
        <Fragment>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                spacing={3}
                className={classes.grid}>
                <div className={classes.reduce}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor='search product'>
                            Buscar un producto
                        </InputLabel>
                        <Input
                            id='search_product'
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            startAdornment={
                                <InputAdornment position='start'>
                                    <Search />
                                </InputAdornment>
                            }
                        />
                    </FormControl>
                </div>
                <div className={classes.list}>
                    <List
                        component='nav'
                        subheader={
                            <ListSubheader component='div' align='center'>
                                Inventario de publicaciones
                            </ListSubheader>
                        }>
                        {makeMagazines()}
                    </List>
                </div>
            </Grid>
        </Fragment>
    );
}

MagazineSeachList.propTypes = {};

export default withStyles(styles)(MagazineSeachList);
