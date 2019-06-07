import React, { Component } from 'react';
import FirstStage from './FirstStage/';
import SecondStage from './SecondStage/';
import BoxOpened from '../BoxOpened';
import MagazineSearchList from '../../SellsFolder/MagazineSearchList';
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

    render() {
        const { stage, date, provider } = this.state;
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
                        quantity={ this.props.from === 'returns'}
                    />
                ) : stage === 'second' ? (
                    this.props.from !== 'returns' ? (
                        <SecondStage changeStage={this.handleStageChange} />
                    ) : (
                        <MagazineSearchList />
                    )
                ) : (
                    <FirstStage changeStage={this.handleStageChange} />
                )}
            </div>
        );
    }
}

export default Form;
