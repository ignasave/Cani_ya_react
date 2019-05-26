import React, { Component } from 'react';
import ListOfProducts from '../ListOfProducts';
import AddIcon from '@material-ui/icons/Add';
import FloatingActionButtons from '../FloatingButton';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
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

    handleInitial = (data) => {
        this.props.handleChangeInitial(data)
    }

    render() {
        const { date, provider, classes } = this.props;
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

                <ListOfProducts items={items} handleChangeInitial={this.handleInitial}/>

                <Button
                    variant='contained'
                    color='primary'
                    aria-label='Close'
                    className={classes.margin}
                    onClick={this.handleCloseBox}>
                    <SaveAlt className={classes.extendedIcon} />
                    Cerrar esta caja
                </Button>

                <FloatingActionButtons
                    color='secondary'
                    aria='add'
                    icon={this.state.icon}
                    tooltip={'Ingresa un nuevo articulo'}
                    clickHandler={this.handleChangeStage}
                />
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
