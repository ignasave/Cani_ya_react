import Typography from '@material-ui/core/Typography';
import React, { Component } from 'react';
import Boxes from '../Boxes';
import Person from '@material-ui/icons/Person';
import Loyalty from '@material-ui/icons/Loyalty';
import Grade from '@material-ui/icons/Grade';

const childrens = [
    {
        provider: 'Clarin',
        icon: <Person />,
    },
    {
        provider: 'Nacion',
        icon: <Loyalty />,
    },
    {
        provider: 'Palena',
        icon: <Grade />,
    },
];

const boxes = [
    {
        formatedDate: '21-5-2019',
        childrens: childrens,
    },
    {
        formatedDate: '22-5-2019',
        childrens: childrens,
    },
    {
        formatedDate: '23-5-2019',
        childrens: childrens,
    },
];

export default class index extends Component {
    state = {
        thereIsBoxes: true,
    };

    checkBoxes() {
        const { thereIsBoxes } = this.state;
        const { section } = this.props

        return thereIsBoxes ? (
            <Boxes boxes={boxes} section={section} />
        ) : (
            <Typography component='h2' variant='overline' gutterBottom>
                ¡Vaya parece que aun no hay cajas!
            </Typography>
        );
    }

    render() {
        return <div>{this.checkBoxes()}</div>;
    }
}
