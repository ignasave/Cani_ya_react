import React from 'react';

import CategorySubtitle from '../CategorySubtitle';
import ListOfItems from '../ListOfItems';
import NavigationOnInventory from '../NavigationOnInventory';

import useSearch from '../../../Utils/searchHook';

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

    const [ filteredItems, setSearch ] = useSearch(items);

    return (
        <>
            <NavigationOnInventory setSearch={ setSearch } />
            <CategorySubtitle category={category} />
            <ListOfItems items={filteredItems} />
        </>
    );
};

export default Inventory;

