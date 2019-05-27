import React, { Component } from 'react';
import FirstStage from './FirstStage/';
import SecondStage from './SecondStage/';
import BoxOpened from '../BoxOpened';

class Form extends Component {
    state = {
        stage: 'first',
        date: null,
        provider: null,
        initial: {
            edition:1,
            publicPrice: 0,
            buyPrice: 0,
            envy: 0,
            cuantity: 0,
            name: '',
        }
    };

    handleStageChange = data => {
        if (data.date && data.provider) {
            this.setState({ date: data.date, provider: data.provider });
        }
        this.setState({ stage: data.stage });
    };

    handleShowForm = (state) => {
        this.props.handleMostrarForm(state);
    }

    handleChangeInitial = (data) => {
        this.setState({ initial: data })
    }

    render() {
        return (
            <div>
                {this.state.stage === 'first' ? (
                    <FirstStage changeStage={this.handleStageChange} />
                ) : this.state.stage === 'menu' ? (
                    <BoxOpened
                        date={this.state.date}
                        provider={this.state.provider}
                        changeStage={this.handleStageChange}
                        handleShowForm={this.handleShowForm.bind(this)}
                        handleChangeInitial={this.handleChangeInitial}
                    />
                ) : this.state.stage === 'second' ? (
                    <SecondStage changeStage={this.handleStageChange} initial={this.state.initial}/>
                ) : (
                    <FirstStage changeStage={this.handleStageChange} />
                )}
            </div>
        );
    }
}

export default Form;
