import React from 'react';
import NavTabs from '../../../sharedComponents/NavTab';
import ListPart from '../ListPart';
// SETED PROPS
const listData = [
    {
        group: 'Grupo 1',
        dist: [
            {
                publication: 'HOLALA',
                direction: 'Chacabuco 4956',
                helper: 'Viejos locos',
                id: 1,
            },
            {
                publication: 'Autos del futuro',
                direction: 'Cordoba 3158',
                helper: 'Reja negra',
                id: 2,
            },
            {
                publication: 'THC',
                direction: 'datofalso 123',
                helper:
                    'ayudin skerry te pruebo el sumerio skerio farruko derrutini',
                id: 3,
            },
        ],
    },
    {
        group: 'Grupo 2',
        dist: [
            {
                publication: 'HOLALA',
                direction: 'Chacabuco 4956',
                helper: 'Viejos locos',
                id: 4,
            },
            {
                publication: 'Autos del futuro',
                direction: 'Cordoba 3158',
                helper: 'Reja negra',
                id: 5,
            },
            {
                publication: 'THC',
                direction: 'datofalso 123',
                helper:
                    'ayudin skerry te pruebo el sumerio skerio farruko derrutini',
                id: 6,
            },
        ],
    },
    {
        group: 'Grupo 3',
        dist: [
            {
                publication: 'HOLALA',
                direction: 'Chacabuco 4956',
                helper: 'Viejos locos',
                id: 7,
            },
            {
                publication: 'Autos del futuro',
                direction: 'Cordoba 3158',
                helper: 'Reja negra',
                id: 8,
            },
            {
                publication: 'THC',
                id: 9,
                direction: 'datofalso 123',
                helper:
                    'ayudin skerry te pruebo el sumerio skerio farruko derrutini',
            },
        ],
    },
];

const tabItems = [
    {
        label: 'Lista',
        href: 'page1',
        component: <ListPart listData={listData} />,
    },
    {
        label: 'Mapa',
        href: 'page2',
        component: <div>MAPA</div>,
    },
];

function Distribution() {
    return <NavTabs tabsData={tabItems} />;
}

export default Distribution;
