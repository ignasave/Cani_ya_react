import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';
import { styles } from './styles';
import ListOfNewsPaper from '../ListOfNewsPaper';
import { DatePickerSetup } from '../../../Utils/ConfigSetup';


function Periodic({ classes }) {
    const [date, setDate] = React.useState(new Date());
    const items = [
        { name: 'DeTodo', secondary: 'Jueves 13/06 - Jueves 20/06' },
        { name: 'Perfil', secondary: 'Sabado 7/06 - Sabado 14/06' },
        { name: 'Perfil', secondary: 'Domingo 8/06 - Domingo 15/06' },
    ];
    return (
        <Fragment>
            <div className={classes.datePicker}>
                <DatePicker
                    label='Fecha: '
                    value={date}
                    onChange={newDate => setDate(newDate)}
                    views={DatePickerSetup}
                    variant='dialog'
                />
            </div>
            <ListOfNewsPaper items={items} />
        </Fragment>
    );
}

Periodic.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Periodic)

