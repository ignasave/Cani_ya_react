import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import DistListItem from '../DistListItem';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

function DistList({ listData, classes }) {
    function makeListItems() {
        return listData.map((element, index) => {
            return (
                <Fragment key={element.hour}>
                    <ListSubheader
                        component='div'
                        align='center'
                        className={classes.hour}>
                        {element.hour}
                    </ListSubheader>
                    {element.dist.map((subElement, index) => {
                        return <DistListItem data={subElement} key={index} />;
                    })}
                    {index + 1 !== listData.length ? <Divider /> : null}
                </Fragment>
            );
        });
    }

    return <List>{makeListItems()}</List>;
}

DistList.propTypes = {
    listData: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DistList);
