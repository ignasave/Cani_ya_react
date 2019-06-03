import React from 'react';
import PropTypes from 'prop-types';
import ListOfItems from '../ListOfItems';
import NavigationOnInventory from '../NavigationOnInventory';
import CategorySubtitle from '../CategorySubtitle';
const items = [
    {
        name: '!HOLA',
        existencies: 3,
        price: 124,
        image: 'https://picsum.photos/80',
    },
    {
        name: 'CARAS',
        existencies: 6,
        price: 133,
        image: 'https://picsum.photos/80',
    },
    {
        name: 'GENTE',
        existencies: 1,
        price: 67,
        image: 'https://picsum.photos/80',
    },
];

const Inventory = props => {
    return (
        <div>
            <NavigationOnInventory />
            <CategorySubtitle category=' category ' />
            <ListOfItems items={items} />
        </div>
    );
};

export default Inventory;
