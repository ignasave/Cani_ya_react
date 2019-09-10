import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import DistListItem from '../DistListItem';
import Divider from '@material-ui/core/Divider';
import ListSubheader from '@material-ui/core/ListSubheader';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import { SortableElement, SortableContainer } from 'react-sortable-hoc';
import arrayMove from 'array-move';

function DistList({ listData, classes }) {
    const [list, setList] = useState(listData);

    const SortableItem = SortableElement(({ data, index }) => (
        <DistListItem data={data} key={index} />
    ));

    const SortableList = SortableContainer(({ dist }) => {
        return (
            <div>
                {dist.map((element, index) => {
                    return (
                        <SortableItem
                            key={`item-${index}`}
                            index={index}
                            data={element}
                        />
                    );
                })}
            </div>
        );
    });

    const makeSorteablesLists = listArray => {
        return listArray.map((element, index) => {
            return (
                <Fragment key={element.group}>
                    <ListSubheader
                        component='div'
                        align='center'
                        className={classes.hour}>
                        {element.group}
                    </ListSubheader>
                    <SortableList
                        dist={element.dist}
                        onSortEnd={({ oldIndex, newIndex }) => {
                            onSortEnd(index, oldIndex, newIndex);
                        }}
                        pressDelay={200}
                    />
                    {index + 1 !== list.length ? <Divider /> : null}
                </Fragment>
            );
        });
    };

    const onSortEnd = (index, oldIndex, newIndex) => {
        setList( list.map( (element, i) => {
            return ( i === index ? {group: element.group, dist: arrayMove(list[i].dist, oldIndex, newIndex)} : element)
        }));
    };
    
    return <List> {makeSorteablesLists(list)} </List>;
}

DistList.propTypes = {
    listData: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DistList);
