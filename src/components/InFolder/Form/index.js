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

    handleShowForm = state => {
        this.props.handleMostrarForm(state);
    };

    handleChangeInitial = data => {
        this.setState({ initial: data });
    };

    render() {
        const { stage, date, provider, initial } = this.state;
        return (
            <div>
                {stage === 'first' ? (
                    <FirstStage changeStage={this.handleStageChange} />
                ) : stage === 'menu' ? (
                    <BoxOpened
                        date={date}
                        provider={provider}
                        changeStage={this.handleStageChange}
                        handleShowForm={this.handleShowForm.bind(this)}
                    />
                ) : stage === 'second' ? (
                    <SecondStage
                        changeStage={this.handleStageChange}
                        initial={initial}
                    />
                ) : (
                    <FirstStage changeStage={this.handleStageChange} />
                )}
            </div>
        );
    }
}

export default Form;
