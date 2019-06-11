import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import DistListItem from '../DistListItem';

function DistList({ listData }) {
    function makeListItems() {
        return listData.map((element, index) => {
            return <DistListItem data={element} key={index} />;
        });
    }

    return <List>{makeListItems()}</List>;
}

DistList.propTypes = {
    listData: PropTypes.array.isRequired,
};

export default DistList;
