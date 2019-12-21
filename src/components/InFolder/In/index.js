import React from 'react';
import { Link } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import FloatingActionButton from '../../../sharedComponents/FloatingButton/FloatingActionButton';
import BoxesOnInventory from '../BoxesOnInventory';

const In = () => (
    <>
        <BoxesOnInventory section='cajas' />
        <Link to={{ pathname: '/form/first', state: { from: false } }}>
            <FloatingActionButton
                color='secondary'
                aria='add'
                icon={ <AddIcon /> }
                tooltip='Abre una nueva caja'
                clickHandler={() => {} }
            />
        </Link>
    </>
);

export default In;