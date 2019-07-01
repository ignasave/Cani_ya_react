import React, { Component } from 'react';
import Layout from '../Layout';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router } from 'react-router-dom';
import { ReturnRoutes } from '../../RouteSetup'
import { MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
          light: '#757ce8',
          main: '#3f50b5',
          dark: '#002884',
          contrastText: '#fff',
        },
        secondary: {
          light: '#f73378',
          main: '#f50057',
          dark: '#ab003c',
          contrastText: '#fff',
        },
      },
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
