import React, { Component } from 'react';
import FloatingActionButtons from '../../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';
import BoxesOnInventory from '../BoxesOnInventory';

class In extends Component {
    state = {
        icon: <AddIcon />,
        showForm: false,
        tooltip: 'Abre una nueva caja',
    };

    handleShowForm = state => {
        this.setState({ showForm: state });
    };

    render() {
        const { showForm, icon, tooltip } = this.state;
        return (
            <div>
                {showForm ? (
                    <Form handleMostrarForm={this.handleShowForm} />
                ) : (
                    <div>
                        <BoxesOnInventory section='cajas' />
                        <FloatingActionButtons
                            color='secondary'
                            aria='add'
                            icon={icon}
                            tooltip={tooltip}
                            clickHandler={() => {
                                this.handleShowForm(true);
                            }}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default In;
