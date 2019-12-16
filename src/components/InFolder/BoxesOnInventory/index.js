import React, { Component } from 'react';

import Boxes from '../Boxes';
import Grade from '@material-ui/icons/Grade';
import Loyalty from '@material-ui/icons/Loyalty';
import Person from '@material-ui/icons/Person';
import Typography from '@material-ui/core/Typography';

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

export default class BoxesOnInventory extends Component {
    state = {
        thereIsBoxes: true,
    };

    render() {
        const { section } = this.props;
        return (
            <div>
                {thereIsBoxes ? (
                    <Boxes boxes={boxes} section={section} />
                ) : (
                    <Typography component='h2' variant='overline' gutterBottom>
                        ¡Vaya parece que aun no hay cajas!
                    </Typography>
                )}
            </div>
        );
    }
}
