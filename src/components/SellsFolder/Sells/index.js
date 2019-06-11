import React from 'react';
import NavTabs from '../NavTab';
import NewsPaperTab from '../NewsPaperTab';
import Magazines from '../Magazines';

const tabItems = [
    {
        label: 'Diarios',
        href: 'page1',
        component: <NewsPaperTab />,
    },
    {
        label: 'Revistas',
        href: 'page2',
        component: <Magazines />,
    },
];

function Sells(props) {
    return <NavTabs tabsData={tabItems} />;
}

Sells.propTypes = {};

export default Sells;
