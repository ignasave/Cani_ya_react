import React from 'react';
import PropTypes from 'prop-types';

import Add from '@material-ui/icons/Add';
import Divider  from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import Search from '@material-ui/icons/Search';
import { withStyles } from '@material-ui/core/styles';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import Publication from '../Publication';
import PublicationSingleLine from '../PublicationSingleLine';
import { styles } from './styles';

function MagazineSeachList({ classes, simpleList = false }) {
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
                <div key={index}>
                    {simpleList ? (
                        <PublicationSingleLine magazine={magazine} />
                    ) : (
                        <Publication magazine={magazine} />
                    )}
                    {index + 1 !== items.length ? <Divider /> : null}
                </div>
            );
        });
    };

    return (
        <>
            <Grid
                container
                direction='column'
                justify='center'
                alignItems='center'
                spacing={3}
                className={classes.grid}>
                <div className={classes.reduce}>
                    <FormControl className={classes.margin}>
                        <InputLabel htmlFor='search_product'>
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
                {simpleList && (
                    <FloatingActionButton
                        color='secondary'
                        icon={<Add />}
                        tooltip='Añade un nuevo producto'
                        aria='add a product'
                        clickHandler={() => {}}
                    />
                ) }
            </Grid>
        </>
    );
}

MagazineSeachList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MagazineSeachList);
