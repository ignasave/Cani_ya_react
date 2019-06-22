import React, { Component } from 'react';
import Layout from '../Layout';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReturnRoutes } from '../../RouteSetup'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  });

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Layout />
                    { ReturnRoutes() }
                </Router>
            </MuiPickersUtilsProvider>
            </MuiThemeProvider>
        );
    }
}

export default App;
