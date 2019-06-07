import React from 'react';
import Grid from '@material-ui/core/Grid';
import NewsPaperItem from '../NewsPaperItem';
import PropTypes from 'prop-types';

const makeNewsPapers = items => {
    return items.map((element, index) => {
        return (
            <NewsPaperItem
                name={element.name}
                secText={element.secondary}
                key={index}
            />
        );
    });
};

function ListOfNewsPaper({ items }) {
    return <Grid container>{makeNewsPapers(items)}</Grid>;
}

ListOfNewsPaper.propTypes = {
    items: PropTypes.array.isRequired,
};

export default ListOfNewsPaper;
