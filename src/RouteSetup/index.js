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
    Notes,
} from '@material-ui/icons';

import In from '../components/InFolder/In';
import Inventory from '../components/InventoryFolder/Inventory';
import Sells from '../components/SellsFolder/Sells';
import MagazineSeachList from '../components/SellsFolder/MagazineSearchList';
import Returns from '../components/ReturnsFolder/Returns';
import Distribution from '../components/DistributionFolder/Distribution';
import Clients from '../components/ClientsFolder/Clients'
import ProductDetail from '../components/InventoryFolder/ProductDetail'

import { Route } from 'react-router-dom';
import Providers from '../components/ProvidersFolder/Providers';
import Reports from '../components/ReportsFolder/Reports';
import NotesComponent from '../components/NotesFolder/Notes'

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
        component: ProductDetail,
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
        component: Distribution,
    },
    {
        route: '/clientes',
        name: 'Clientes',
        inLayout: true,
        icon: <AssignmentInd />,
        component: Clients
    },
    {
        route: '/proveedores',
        name: 'Proveedores',
        inLayout: true,
        icon: <AssignmentReturned />,
        component: Providers,
    },
    {
        route: '/reportes',
        name: 'Reportes',
        inLayout: true,
        icon: <BarChart />,
        component: Reports,
    },
    {
        route: '/notas',
        name: 'Notas',
        inLayout: true,
        icon: <Notes/>,
        component: NotesComponent,
    }
];
