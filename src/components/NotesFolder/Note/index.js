import React, { useState } from 'react';

import Done from '@material-ui/icons/Done';
import IconButton from '@material-ui/core/IconButton';
import Redo from '@material-ui/icons/Redo';
import TextField from '@material-ui/core/TextField';
import Undo from '@material-ui/icons/Undo';

import useStyles from './styles';

const Note = () => {
    const classes = useStyles();
    const [disabled] = useState({
        undo: true,
        redo: true,
        done: true,
    });
    return (
        <>
            <div className={classes.helpBar}>
                <IconButton
                    aria-label='undo'
                    color='secondary'
                    disabled={disabled.undo}>
                    <Undo />
                </IconButton>
                <IconButton
                    aria-label='redo'
                    color='secondary'
                    disabled={disabled.redo}>
                    <Redo />
                </IconButton>
                <IconButton
                    aria-label='done'
                    color='secondary'
                    disabled={disabled.done}>
                    <Done />
                </IconButton>
            </div>
            <div className={classes.textField}>
                <TextField
                    id='note-text'
                    multiline
                    fullWidth
                    autoFocus
                    margin='normal'
                />
            </div>
        </>
    );
};

export default Note;
