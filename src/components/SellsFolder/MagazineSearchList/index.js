import React from 'react';
import PropTypes from 'prop-types';

import Add from '@material-ui/icons/Add';
import Divider  from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { withStyles } from '@material-ui/core/styles';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import Publication from '../Publication';
import PublicationSingleLine from '../PublicationSingleLine';
import { styles } from './styles';

import SearchComponent from '../../../sharedComponents/SearchComponent';
import useSearch from '../../../hooks/searchHook';

function MagazineSeachList({ classes, location }) {

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

    const [ filteredMagazines, setSearch ] = useSearch(items);

    const { state } = location;

    const simpleList = state.simpleList ? state.simpleList : false;

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
                    <SearchComponent
                        title="producto"
                        setSearch={ setSearch }
                    />
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
