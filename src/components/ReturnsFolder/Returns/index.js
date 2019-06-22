import React, { useState } from 'react';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../../InFolder/Form';
import BoxesOnInventory from '../../InFolder/BoxesOnInventory';

function Returns() {
    const [showForm, useShowForm] = useState(false);

    const icon = <AddIcon />;
    const aria = 'add';
    const tooltip = 'Abre una nueva caja para devolucion';
    const color = 'secondary';

    const handeUseShowForm = state => {
        useShowForm(state);
    };

    return (
        <div>
            {showForm ? (
                <Form handleMostrarForm={handeUseShowForm} from='returns' />
            ) : (
                <div>
                    <BoxesOnInventory section='devoluciones' />
                    <FloatingActionButtons
                        color={color}
                        aria={aria}
                        icon={icon}
                        tooltip={tooltip}
                        clickHandler={() => {
                            handeUseShowForm(true);
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Returns;
