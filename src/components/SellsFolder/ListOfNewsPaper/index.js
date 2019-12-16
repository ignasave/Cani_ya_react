import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import NewsPaperItem from '../NewsPaperItem';

function ListOfNewsPaper({ items }) {
    return (
        <Grid container>
            {items.map((element, index) => {
                return (
                    <NewsPaperItem
                        name={element.name}
                        secText={element.secondary}
                        key={index}
                    />
                );
            })}
        </Grid>
    );
}

ListOfNewsPaper.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ListOfNewsPaper;
