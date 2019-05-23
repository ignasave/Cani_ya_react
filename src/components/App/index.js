import React, { Component } from 'react';
import Layout from '../Layout';
import In from '../In';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Layout />

                    <Route path='/ingreso' component={In} />
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
