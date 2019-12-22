import React from 'react';

import Add from '@material-ui/icons/Add';
import AddPhotoAlternate from '@material-ui/icons/AddPhotoAlternate';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ListOfProducts from '../ListOfProducts';
import SpeedDialTooltipOpen from '../../../sharedComponents/FloatingButton/SpeedDial';
import { styles } from './styles';

const items = [
    {
        name: '!HOLA',
        quantity: 3,
        edition: 93,
    },
    {
        name: 'Caras',
        quantity: 5,
        edition: 109,
    },
    {
        name: 'GENTE',
        quantity: 6,
        edition: 75,
    },
];

const BoxOpened = ({ location, history, classes }) => {
    const { state:{ date, provider, quantity, from } } = location;

    const actions = [
        {
            icon: <Add />,
            name: 'Añade un producto',
            handleClick: () => history.push({ pathname:'/search', state:{ simpleList: true } }),
        },
        { icon: <AddPhotoAlternate />, name: 'Añade una foto' },
        { icon: <DeleteIcon />, name: 'Eliminar esta caja' },
    ];

    const handleCloseBox = () => {
        if (from === 'ingreso') {
            history.push('/ingreso');
        } else if(from === 'returns') {
            history.push('/devoluciones');
        }
    }

    return (
        <div className={classes.container}>
            <Typography
                variant='h4'
                gutterBottom
                align='center'
                className={classes.title}>
                {provider}
            </Typography>

            <Typography variant='body2' gutterBottom>
                {date}
            </Typography>

            <ListOfProducts items={items} quantity={ quantity } />

            <Button
                variant='contained'
                color='primary'
                aria-label='Close'
                className={classes.margin}
                onClick={handleCloseBox}>
                <SaveAlt className={classes.extendedIcon} />
                Cerrar esta caja
            </Button>

            <SpeedDialTooltipOpen actions={actions} />
        </div>
    )
}

export default withStyles(styles)(BoxOpened);