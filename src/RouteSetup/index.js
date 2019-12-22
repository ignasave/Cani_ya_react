import React from 'react';

import Archive from '@material-ui/icons/Archive'
import AttachMoney from '@material-ui/icons/AttachMoney'
import AssignmentInd from '@material-ui/icons/AssignmentInd'
import AssignmentReturned from '@material-ui/icons/AssignmentReturned'
import BarChart from '@material-ui/icons/BarChart'
import Inbox from '@material-ui/icons/Inbox'
import Notes from '@material-ui/icons/Notes'
import Timeline from '@material-ui/icons/Timeline'
import Undo from '@material-ui/icons/Undo'

import BoxOpened from '../components/InFolder/BoxOpened';
import FirstStage from '../components/InFolder/Form/FirstStage';
import In from '../components/InFolder/In';
import Inventory from '../components/InventoryFolder/Inventory';
import Sells from '../components/SellsFolder/Sells';
import MagazineSeachList from '../components/SellsFolder/MagazineSearchList';
import Returns from '../components/ReturnsFolder/Returns';
import Distribution from '../components/DistributionFolder/Distribution';
import Clients from '../components/ClientsFolder/Clients'
//import ProductDetail from '../components/InventoryFolder/ProductDetail'
//import Note from '../components/NotesFolder/Note'
import NewClient from '../components/ClientsFolder/NewClient'
import ClientProfile from '../components/ClientsFolder/ClientProfile';

import { Route } from 'react-router-dom';
import Providers from '../components/ProvidersFolder/Providers';
import Reports from '../components/ReportsFolder/Reports';
import NotesComponent from '../components/NotesFolder/Notes'
import EditDistribution from '../components/DistributionFolder/EditDistibution'

export const ReturnRoutes = () => {
    return RoutesConfig.map((element, index) => {
        return (
            <Route
                exact={!element.exact}
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
        route: '/editDist',
        inLayout: false,
        component: EditDistribution
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
        exact: true, 
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
        component: ClientProfile
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
    },
    {
        route: '/form/first',
        inLayout: true,
        component: FirstStage
    },
    {
        route: '/caja',
        inLayout: true,
        component: BoxOpened
    }
];
