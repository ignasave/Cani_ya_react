import React from 'react';
import PropTypes from 'prop-types';

import ListSubheader from '@material-ui/core/ListSubheader';

import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

function CategorySubtitle({ category, classes }) {
    return (
        <ListSubheader component='div' align='center' className={classes}>
            {category}
        </ListSubheader>
    );
}

CategorySubtitle.propTypes = {
    classes: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};

export default withStyles(styles)(CategorySubtitle);
