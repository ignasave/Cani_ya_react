import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab'

function LinkTab(props) {
    return (
        <Tab
            component='a'
            onClick={event => event.preventDefault()}
            {...props}
        />
    );
}

export default LinkTab;
