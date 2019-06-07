import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Divider } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';

function NewsPaperItem({ classes, name, secText }) {
    const [count, setCount] = useState(0);

    const handleSetCount = value => {
        if (value) {
            value = Math.ceil(value);
            if (value < 0) value = 0;
            else if (value > 999) value = 999;
        }
        setCount(value);
    };

    return (
        <Grid item xs={12} md={6} className={classes.container}>
            <List>
                <ListItem>
                    <ListItemText
                        primary={name}
                        secondary={secText ? secText : null}
                    />
                    <ListItemSecondaryAction>
                        <IconButton
                            aria-label='Remove'
                            onClick={() => handleSetCount(count - 1)}>
                            <Remove />
                        </IconButton>
                        <TextField
                            id='standard-number'
                            type='number'
                            value={count}
                            onChange={e => handleSetCount(e.target.value)}
                            className={classes.numberField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin='normal'
                        />
                        <IconButton
                            aria-label='Add'
                            onClick={() => handleSetCount(count + 1)}>
                            <Add />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
            <Divider />
        </Grid>
    );
}

NewsPaperItem.propTypes = {
    classes: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    secText: PropTypes.string,
};

export default withStyles(styles)(NewsPaperItem);
