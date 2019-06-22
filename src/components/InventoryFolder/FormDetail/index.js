import React, { useState, Fragment } from 'react';
import TextField from '@material-ui/core/TextField';
import { Grid, Select, Chip, IconButton } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { useTheme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Selector from '../../InFolder/Selector';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import { useStyles } from './styles'

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const Etiquetas = [
    'Guerra',
    'Autos',
    'Noticias',
    'Farandula',
    'Moda',
    'Costura',
    'Para armar',
    'Coleccion',
    'Historia',
    'Niños',
];

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const items = ['', 'Diario', 'Periodico', 'Revista'];

function FormDetail() {
    const classes = useStyles();
    const theme = useTheme();
    const [tag, setTag] = useState([]);
    const [name, setName] = useState('');
    const [key, setKey] = useState('');
    const [category, setCategory] = useState('');

    const getStyles = (name, tag, theme) => {
        return {
            fontWeight:
                tag.indexOf(name) === -1
                    ? theme.typography.fontWeightRegular
                    : theme.typography.fontWeightMedium,
        };
    }
    return (
        <Fragment>
            <Grid
                container
                direction='row'
                justify='space-around'
                alignItems='center'>
                <Grid item xs={6}>
                    <TextField
                        required
                        id='standard-number'
                        label='Nombre'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        margin='normal'
                        className={classes.textField}
                    />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        required
                        id='standard-number'
                        label='Clave'
                        value={key}
                        onChange={e => setKey(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant='outlined'
                        margin='normal'
                        className={classes.textField}
                    />
                </Grid>

                <Grid item xs={6}>
                    <Selector
                        items={items}
                        name='Categoria'
                        value={category}
                        onChange={cat => setCategory(cat)}
                        className={classes.textField}
                    />
                </Grid>

                <Grid item xs={6} className={classes.iconContainer}>
                    <IconButton component='label'>
                        <AddPhotoAlternate />
                        <input
                            type='file'
                            id='publicationFile'
                            accept='image/png, image/jpeg'
                            className={classes.imageInput}
                        />
                    </IconButton>
                </Grid>

                <Grid item xs={12}>
                    <FormControl
                        className={classes.formControl}
                        fullWidth={true}>
                        <InputLabel htmlFor='select-multiple-checkbox'>
                            Etiquetas
                        </InputLabel>
                        <Select
                            multiple
                            value={tag}
                            onChange={e => setTag(e.target.value)}
                            input={<Input />}
                            renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (
                                        <Chip
                                            key={value}
                                            label={value}
                                            className={classes.chip}
                                        />
                                    ))}
                                </div>
                            )}
                            MenuProps={MenuProps}>
                            {Etiquetas.map(name => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                    style={getStyles(name, tag, theme)}>
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Fragment>
    );
}

FormDetail.propTypes = {};

export default FormDetail;
