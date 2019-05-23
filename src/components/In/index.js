import React, { Component } from 'react';
import FloatingActionButtons from '../FloatingButton';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form';
import BoxesOnInventory from '../BoxesOnInventory';

class In extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: <AddIcon />,
            showForm: false,
        };
    }

    handleClickNewBox = () => {
        this.setState({ showForm: true });
    };

    handleShowForm = () => {
        this.setState({ showForm: false });
    };

    render() {
        return (
            <div>
                {this.state.showForm ? (
                    <Form handleMostrarForm={this.handleShowForm}/>
                ) : (
                    <div>
                        <BoxesOnInventory />
                        <FloatingActionButtons
                            color='secondary'
                            aria='add'
                            icon={this.state.icon}
                            tooltip={'Abre una nueva caja'}
                            clickHandler={this.handleClickNewBox.bind(this)}
                        />
                    </div>
                )}
            </div>
        );
    }
}

export default In;
