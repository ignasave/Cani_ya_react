import React from 'react';
import NavTabs from '../../SellsFolder/NavTab';
import ListPart from '../ListPart'
const listData = [
    {
        publication: 'HOLALA',
        direction: 'Chacabuco 4956',
        helper: 'Viejos locos',
    },
    {
        publication: 'Autos del futuro',
        direction: 'Cordoba 3158',
        helper: 'Reja negra',
    },
    {
        publication: 'THC',
        direction: 'datofalso 123',
        helper: 'ayudin skerry te pruebo el sumerio skerio farruko derrutini',
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

function Distribution(props) {
    return <NavTabs tabsData={tabItems} />;
}


export default Distribution;
