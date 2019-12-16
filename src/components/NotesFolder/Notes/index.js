import React from 'react';

import { Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import { useStyles } from './styles';

function NotesComponent(props) {
    const classes = useStyles();
    return (
        <div>
            <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
                
                spacing={2}>
                <Grid item xs={6}>
                    <Paper component='p' elevation={1} className={classes.grid}>
                        nota 1
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper component='p' elevation={1} className={classes.grid}>
                        nota 2
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper component='p' elevation={1} className={classes.grid}>
                        nota 3
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper component='p' elevation={1} className={classes.grid}>
                        nota 4
                    </Paper>
                </Grid>
            </Grid>
            <FloatingActionButton
                color='secondary'
                icon={<AddIcon />}
                aria='addNote'
                tooltip='Añade una nota'
                clickHandler={() => {}}
            />
        </div>
    );
}

export default NotesComponent;
