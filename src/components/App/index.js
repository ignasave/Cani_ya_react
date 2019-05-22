import React, { Component } from 'react';
import Layout from '../Layout';
import In from '../In';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Layout />
                <In />
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
