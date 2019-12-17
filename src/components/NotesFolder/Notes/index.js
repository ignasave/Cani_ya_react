import React from 'react';

import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import { useStyles } from './styles';

const notes = [
    {
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum nisi non purus vehicula, vitae egestas turpis finibus. Aliquam ornare commodo ultrices. Mauris ullamcorper leo est, vel fermentum arcu sagittis ut.',
    },
    {
        text: 'Proin molestie leo vel augue aliquet tempus ac eu enim. Aenean interdum massa vel velit dapibus, eu accumsan risus aliquam. Nunc nec aliquet sem. Donec nulla neque, ultricies in vestibulum at, sodales in nisi. Duis non mauris congue, rhoncus nisl non, varius diam.'
    },
    {
        text: 'Cras sed consectetur justo. Nam lobortis, ex a aliquam consequat.'
    },
];

function NotesComponent() {
    const classes = useStyles();

    const noteContent = text => {

        const dots = '...';
        let paragraph = text.slice(0, 71)
        if (text.length > 71) paragraph = paragraph.concat(dots);

        return paragraph;
    };

    const gridCorrection = () => {
        if(notes.length % 2) return (<Grid item xs={5}/>)
        else return null
    }

    return (
        <div>
            <Grid
                container
                direction='row'
                justify='space-evenly'
                alignItems='center'
                spacing={0}>
                {notes.map((item, index) => (
                    <Grid item xs={5} key={`grid-note-item[${index}]`}>
                        <Paper
                            component='p'
                            onClick={() => {}}
                            elevation={2}
                            className={classes.grid}>
                            {noteContent(item.text)}
                        </Paper>
                    </Grid>
                ))}
                {gridCorrection()}
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
