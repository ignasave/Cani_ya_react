import React from 'react';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Search from '@material-ui/icons/Search';

import useStyles from './styles';

const SearchComponent = ({ title, setSearch, flex }) => {
    const classes = useStyles();
    return (
        <div className={flex ? classes.flex : null }>
            <FormControl className={classes.margin}>
                <InputLabel htmlFor='search_product'>
                    Buscar un { title }
                </InputLabel>
                <Input
                    id='search_product'
                    onChange={e => setSearch(e.target.value)}
                    startAdornment={
                        <InputAdornment position='start'>
                            <Search />
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    )
};

export default SearchComponent;