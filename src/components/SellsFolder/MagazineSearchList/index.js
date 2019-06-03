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
import ListItem from '@material-ui/core/ListItem';
import FolderIcon from '@material-ui/icons/Folder';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

function MagazineSeachList({ classes }) {
    const [search, setSearch] = React.useState('');
    const items = ['Hola', 'Caras', 'Gente'];

    let filteredMagazines = items.filter(magazine => {
        return magazine.toLowerCase().indexOf(search) !== -1;
    });

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
                    <List>
                        {filteredMagazines.map((magazine, index) => {
                            return (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <FolderIcon />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={magazine}
                                        secondary={'Secondary text'}
                                    />
                                </ListItem>
                            );
                        })}
                    </List>
                </div>
            </Grid>
        </Fragment>
    );
}

MagazineSeachList.propTypes = {};

export default withStyles(styles)(MagazineSeachList);
