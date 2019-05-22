import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Box from '../Box';

const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class Boxes extends React.Component {
    makeBoxes = items => {
        return items.map((element, index) => {
            return (
                <Box
                    title={element.formatedDate}
                    key={index}
                    childrens={element.childrens}
                />
            );
        });
    };
    render() {
        const { classes, boxes } = this.props;

        return (
            <List
                component='nav'
                subheader={
                    <ListSubheader component='div' align='center'>
                        Historial de cajas
                    </ListSubheader>
                }
                className={classes.root}>
                {this.makeBoxes(boxes)}
            </List>
        );
    }
}

Boxes.propTypes = {
    classes: PropTypes.object.isRequired,
    boxes: PropTypes.array.isRequired,
};

export default withStyles(styles)(Boxes);
