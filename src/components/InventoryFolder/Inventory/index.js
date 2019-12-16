import React from 'react';

import CategorySubtitle from '../CategorySubtitle';
import ListOfItems from '../ListOfItems';
import NavigationOnInventory from '../NavigationOnInventory';

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

const Inventory = () => {
    const category = 'category';
    return (
        <>
            <NavigationOnInventory />
            <CategorySubtitle category={category} />
            <ListOfItems items={items} />
        </>
    );
};

export default Inventory;
