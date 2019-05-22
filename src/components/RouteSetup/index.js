import React from 'react';
import { 
    Inbox, 
    Archive,
    AttachMoney, 
    Undo,
    Timeline, 
    AssignmentInd,
    AssignmentReturned, 
    BarChart
   } from '@material-ui/icons';

export const RoutesConfig = [
    {
        route: 'inventario',
        name: 'Inventario',
        icon: <Inbox/>,
    },
    {
        route: 'ingreso',
        name: 'Ingreso',
        icon: <Archive/>,
    },
    {
        route: 'ventas',
        name: 'Ventas',
        icon: <AttachMoney/>,
    },
    {
        route: 'devoluciones',
        name: 'Devoluciones',
        icon: <Undo/>,
    },
    {
        route: 'reparto',
        name: 'Reparto',
        icon: <Timeline/>,
    },
    {
        route: 'clientes',
        name: 'Clientes',
        icon: <AssignmentInd/>,
    },
    {
        route: 'proveedores',
        name: 'Proveedores',
        icon: <AssignmentReturned/>,
    },
    {
        route: 'reportes',
        name: 'Reportes',
        icon: <BarChart/>,
    },
]