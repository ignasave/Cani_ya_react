import React from 'react';
import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import AddIcon from '@material-ui/icons/Add';
import BoxesOnInventory from '../../InFolder/BoxesOnInventory';
import { Link } from 'react-router-dom';

const Returns = () => (
    <>
        <BoxesOnInventory section='devoluciones' />
        <Link to={{ pathname: '/form/first', state: { from: 'returns' } }}>
            <FloatingActionButton
                aria='add'
                icon={ <AddIcon /> }
                tooltip='Abre una nueva caja para devolucion'
                clickHandler={() => {}}
            />
        </Link>
    </>
)

export default Returns;
