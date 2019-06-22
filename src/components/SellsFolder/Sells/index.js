import React from 'react';
import NavTabs from '../NavTab';
import NewsPaperTab from '../NewsPaperTab';
import Magazines from '../Magazines';
import Periodics from '../Periodics'

const tabItems = [
    {
        label: 'Diarios',
        href: 'page1',
        component: <NewsPaperTab />,
    },
    {
        label: 'Periodicos',
        href:'page3',
        component: <Periodics />,
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
