import React, { Component } from 'react';
import Layout from '../Layout';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReturnRoutes } from '../../RouteSetup'

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Layout />
                    { ReturnRoutes()}
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
