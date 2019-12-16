import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Add from '@material-ui/icons/Add';
import AddIcon from '@material-ui/icons/Add';
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

class BoxOpened extends Component {
    state = {
        icon: <AddIcon />,
    };

    handleChangeStage = () => {
        this.props.changeStage({ stage: 'second' });
    };

    handleCloseBox = () => {
        this.props.handleShowForm(false);
    };

    render() {
        const actions = [
            {
                icon: <Add />,
                name: 'Añade un producto',
                handleClick: this.handleChangeStage,
            },
            { icon: <AddPhotoAlternate />, name: 'Añade una foto' },
            { icon: <DeleteIcon />, name: 'Eliminar esta caja' },
        ];
        const { date, provider, classes, quantity } = this.props;
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

                <ListOfProducts items={items} quantity={quantity} />

                <Button
                    variant='contained'
                    color='primary'
                    aria-label='Close'
                    className={classes.margin}
                    onClick={this.handleCloseBox}>
                    <SaveAlt className={classes.extendedIcon} />
                    Cerrar esta caja
                </Button>

                <SpeedDialTooltipOpen actions={actions} />
            </div>
        );
    }
}

BoxOpened.propTypes = {
    classes: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
    provider: PropTypes.string.isRequired,
};

export default withStyles(styles)(BoxOpened);
