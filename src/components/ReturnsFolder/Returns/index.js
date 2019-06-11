import React, { useState } from 'react';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../../InFolder/Form'
import BoxesOnInventory from '../../InFolder/BoxesOnInventory'

function Returns(props) {
    const [showForm, useShowForm] = useState(false);
    const icon = <AddIcon/>
    const handeUseShowForm = (state) => {
        useShowForm(state);
    }

    return (
        <div>
            {showForm ? (
                <Form handleMostrarForm={handeUseShowForm} from='returns'></Form>
            ) : (
                <div>
                    <BoxesOnInventory section='devoluciones' ></BoxesOnInventory>
                    <FloatingActionButtons
                        color='secondary'
                        aria='add'
                        icon={icon}
                        tooltip={'Abre una nueva caja para devolucion'}
                        clickHandler={() => {
                            handeUseShowForm(true)
                        }}
                    />
                </div>
            )}
        </div>
    );
}

export default Returns;
