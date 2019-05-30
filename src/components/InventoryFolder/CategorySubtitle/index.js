import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

function CategorySubtitle({category, classes}) {
    return (
        <Typography variant='caption' gutterBottom className={classes.subtitle}>
            {category}
        </Typography>
    );
}

CategorySubtitle.propTypes = {
    classes: PropTypes.object.isRequired,
    category: PropTypes.string.isRequired,
};

export default withStyles(styles)(CategorySubtitle);
