import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import ListSubheader from '@material-ui/core/ListSubheader';

function CategorySubtitle({ category, classes }) {
    return (
        <ListSubheader component='div' align='center'>
            {category}
        </ListSubheader>
    );
}

CategorySubtitle.propTypes = {
    classes: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};

export default withStyles(styles)(CategorySubtitle);
