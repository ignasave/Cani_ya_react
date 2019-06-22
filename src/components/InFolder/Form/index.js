import React, { Component } from 'react';
import FirstStage from './FirstStage/';
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
        const { from } = this.props
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
                        quantity={ from === 'returns'}
                    />
                ) : stage === 'second' ? (
                    <MagazineSearchList simpleList={!(from === 'returns')} />
                ) : (
                    <FirstStage changeStage={this.handleStageChange} />
                )}
            </div>
        );
    }
}

export default Form;
