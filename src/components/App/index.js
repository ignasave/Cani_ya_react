import React, { Component } from 'react';
import Layout from '../Layout';
import In from '../InFolder/In';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Inventory from '../InventoryFolder/Inventory'
import Sells from '../SellsFolder/Sells'
import MagazineSeachList from '../SellsFolder/MagazineSearchList'

class App extends Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Router>
                    <Layout />

                    <Route exact path='/ingreso' component={In} />
                    <Route exact path='/inventario' component={Inventory} />
                    <Route exact path='/ventas' component={Sells} />
                    <Route exact path='/search' component={MagazineSeachList}/>
                    
                </Router>
            </MuiPickersUtilsProvider>
        );
    }
}

export default App;
