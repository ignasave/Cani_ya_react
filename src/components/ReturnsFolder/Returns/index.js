import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../../InFolder/Form'
import BoxesOnInventory from '../../InFolder/BoxesOnInventory'

function Returns(props) {
    const [showForm, useShowForm] = React.useState(false);

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
                        icon={<AddIcon />}
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

Returns.propTypes = {};

export default Returns;
