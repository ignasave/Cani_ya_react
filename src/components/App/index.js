import React, { Component } from 'react';
import Layout from '../Layout';
import In from '../InFolder/In';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inventory from '../InventoryFolder/Inventory'
import Sells from '../SellsFolder/Sells'
class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Layout />

                    <Route path='/ingreso' component={In} />
                    <Route path='/inventario' component={Inventory} />
                    <Route path='/ventas' component={Sells} />
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
