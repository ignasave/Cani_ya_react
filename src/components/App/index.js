import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { MuiThemeProvider } from '@material-ui/core/styles';

import Layout from '../Layout';
import { ReturnRoutes } from '../../RouteSetup';
import theme from './theme'

const App = () => (
    <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Router>
                <Layout />
                {ReturnRoutes()}
            </Router>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>
);

export default App;
