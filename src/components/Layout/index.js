import React, { Component } from 'react';
import SwipeableTemporaryDrawer from '../SideNavPage';
import SideList from '../SideList';
import TopAppBar from '../TopAppBar';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            title: 'Menu',
            LoginRegister: 'login',
        };
    }

    toggleDrawer = state => () => {
        this.setState({ isOpen: state });
    };

    render() {
        return (
            <div>
                <TopAppBar
                    title={this.state.title}
                    callBack={this.toggleDrawer(true)}
                    LRButton={this.state.LoginRegister}
                />

                <SwipeableTemporaryDrawer
                    sideList={<SideList />}
                    isOpen={this.state.isOpen}
                    callBack={this.toggleDrawer}
                />
            </div>
        );
    }
}

Layout.propTypes = {};

export default Layout;
