import React from 'react';

import {
    Inbox,
    Archive,
    AttachMoney,
    Undo,
    Timeline,
    AssignmentInd,
    AssignmentReturned,
    BarChart,
} from '@material-ui/icons';

import In from '../InFolder/In';
import Inventory from '../InventoryFolder/Inventory';
import Sells from '../SellsFolder/Sells';
import MagazineSeachList from '../SellsFolder/MagazineSearchList';
import Returns from '../ReturnsFolder/Returns';

import { Route } from 'react-router-dom';

export const ReturnRoutes = () => {
    return RoutesConfig.map((element, index) => {
        return (
            <Route
                exact
                path={element.route}
                component={element.component}
                key={index}
            />
        );
    });
};

export const RoutesConfig = [
    {
        route: '/inventario',
        name: 'Inventario',
        icon: <Inbox />,
        inLayout: true,
        component: Inventory,
    },
    {
        route: '/ingreso',
        name: 'Ingreso',
        inLayout: true,
        icon: <Archive />,
        component: In,
    },
    {
        route: '/ventas',
        name: 'Ventas',
        inLayout: true,
        icon: <AttachMoney />,
        component: Sells,
    },
    {
        route: '/devoluciones',
        name: 'Devoluciones',
        inLayout: true,
        icon: <Undo />,
        component: Returns,
    },
    {
        route: '/search',
        inLayout: false,
        component: MagazineSeachList,
    },
    {
        route: '/reparto',
        name: 'Reparto',
        inLayout: true,
        icon: <Timeline />,
    },
    {
        route: '/clientes',
        name: 'Clientes',
        inLayout: true,
        icon: <AssignmentInd />,
    },
    {
        route: '/proveedores',
        name: 'Proveedores',
        inLayout: true,
        icon: <AssignmentReturned />,
    },
    {
        route: '/reportes',
        name: 'Reportes',
        inLayout: true,
        icon: <BarChart />,
    },
];
