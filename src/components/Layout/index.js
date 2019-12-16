import React, { Component } from 'react';

import SwipeableTemporaryDrawer from './SideNavPage';
import SideList from '../SideList';
import TopAppBar from './TopAppBar';

class Layout extends Component {
    state = {
        isOpen: false,
        title: 'Menu',
        LoginRegister: 'login',
    };

    toggleDrawer = state => () => {
        this.setState({ isOpen: state });
    };

    render() {
        const { title, LoginRegister, isOpen } = this.state;
        return (
            <div>
                <TopAppBar
                    title={title}
                    callBack={this.toggleDrawer(true)}
                    LRButton={LoginRegister}
                />

                <SwipeableTemporaryDrawer
                    sideList={<SideList />}
                    isOpen={isOpen}
                    callBack={this.toggleDrawer}
                />
            </div>
        );
    }
}

export default Layout;
