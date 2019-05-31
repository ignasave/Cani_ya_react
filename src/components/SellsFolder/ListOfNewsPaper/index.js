import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import TextField from '@material-ui/core/TextField';
import { styles } from './styles';

const makeDiarios = items => {};

function ListOfNewsPaper({ classes }) {
    const [count, setCount] = useState(0);
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <List>
                    <ListItem>
                        <ListItemText primary='CAPITAL' />
                        <ListItemSecondaryAction>
                            <IconButton aria-label='Add'>
                                <Remove />
                            </IconButton>
                            <TextField
                                id='standard-number'
                                type='number'
                                value={count}
                                /*onChange={(event) => setCount(count = event.target.value)}*/
                                className={classes.numberField}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin='normal'
                            />
                            <IconButton aria-label='Add'
                            
                            onClick={() => setCount(count + 1)}>
                                <Add />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Grid>
        </Grid>
    );
}

ListOfNewsPaper.propTypes = {};

export default withStyles(styles)(ListOfNewsPaper);
