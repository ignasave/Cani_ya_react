import React, { Component } from 'react';
import FirstStage from './FirstStage/';
import SecondStage from './SecondStage/';
import BoxOpened from '../BoxOpened';

class Form extends Component {
    state = {
        stage: 'first',
        date: null,
        provider: null,
    };

    handleStageChange = data => {
        if (data.date && data.provider) {
            this.setState({ date: data.date, provider: data.provider });
        }
        this.setState({ stage: data.stage });
    };

    handleShowForm() {
        this.props.handleMostrarForm();
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
                    />
                ) : this.state.stage === 'second' ? (
                    <SecondStage changeStage={this.handleStageChange} />
                ) : (
                    <FirstStage changeStage={this.handleStageChange} />
                )}
            </div>
        );
    }
}

export default Form;
