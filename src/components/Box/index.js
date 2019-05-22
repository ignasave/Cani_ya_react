import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing(6),
    },
});

class Box extends React.Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState(state => ({ open: !state.open }));
    };

    makeChildrens = items => {
        return items.map((element, index) => {
            return (
                <Collapse
                    in={this.state.open}
                    key={index}
                    timeout='auto'
                    unmountOnExit>
                    <List component='div' disablePadding>
                        <ListItem button className={this.props.classes.nested}>
                            <ListItemIcon>{element.icon}</ListItemIcon>
                            <ListItemText primary={element.provider} />
                        </ListItem>
                    </List>
                </Collapse>
            );
        });
    };

    render() {
        const { title, childrens } = this.props;

        return (
            <Fragment>
                <ListItem button onClick={this.handleClick}>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText inset primary={title} />
                    {this.state.open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                {this.makeChildrens(childrens)}
            </Fragment>
        );
    }
}

Box.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Box);
