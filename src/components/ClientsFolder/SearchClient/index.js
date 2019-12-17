import React from 'react';
import PropTypes from 'prop-types';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import useStyles from './styles';

const SearchClient = ({ search, setSearch }) => {
    const classes = useStyles();
    return (
        <div className={classes.flex}>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor='search_product'>
                    Buscar un cliente
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
    );
};

SearchClient.propTypes = {};

export default SearchClient;
