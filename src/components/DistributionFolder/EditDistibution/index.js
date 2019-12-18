import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Add from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Check from '@material-ui/icons/Check';
import Grid from '@material-ui/core/Grid';
import PickDateOrDay from '../PickDateOrDay';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import Selector from '../../InFolder/Selector';

const useStyles = makeStyles(theme => ({
    grid: {
        paddingTop: theme.spacing(3),
    },
    a: {
        textDecoration: 'none',
    },
    selector: {
        padding: 0,
        margin: 0,
    },
}));

function EditDistribution() {
    const classes = useStyles();
    const icon = <Check />;
    const tooltip = 'Confirmar';

    const iconPlus = <Add />;
    const tooltipPlus = 'Añade un grupo';

    const name = 'Grupo';
    const [group, setGroup] = useState('');
    const items = ['Grupo 1', 'Grupo 2', 'Grupo 3'];

    const [isSelector, setIsSelector] = useState(true);
    const [newGroup, setNewGroup] = useState('');
    return (
        <>
            <Grid
                spacing={2}
                container
                direction='column'
                justify='center'
                alignItems='center'
                className={classes.grid}>
                <Grid item xs={6}>
                    <Link to='/search'>
                        <Button variant='outlined'>Persona</Button>
                    </Link>
                </Grid>
                <Grid item xs={6}>
                    <Button variant='outlined'>Publicacion</Button>
                </Grid>
                <Grid item xs={12}>
                    {isSelector ? (
                        <Selector
                            name={name}
                            value={group}
                            items={items}
                            onChange={grp => {
                                setGroup(grp);
                            }}
                        />
                    ) : (
                        <TextField
                            id='standard-name'
                            label='Name'
                            value={newGroup}
                            onChange={event => {
                                setNewGroup(event.target.value);
                            }}
                            margin='normal'
                        />
                    )}
                    <FloatingActionButton
                        position='other'
                        color='secondary'
                        adria='add'
                        icon={isSelector ? iconPlus : icon}
                        tooltip={tooltipPlus}
                        clickHandler={() => {
                            setIsSelector(!isSelector);
                        }}
                    />
                </Grid>

                <Grid item xs={12}>
                    <PickDateOrDay />
                </Grid>
            </Grid>
            <FloatingActionButton
                color='secondary'
                adria='confirm'
                icon={icon}
                tooltip={tooltip}
                clickHandler={() => {}}
            />
        </>
    );
}

EditDistribution.propTypes = {};

export default EditDistribution;
